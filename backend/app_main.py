from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import asyncio

app = FastAPI(title="Arcadia API")

# simple in-memory "game" list
GAMES = [
    {"id": 1, "title": "Nebula Racer", "genre": "Racing", "players": 12},
    {"id": 2, "title": "Eclipse Front", "genre": "Shooter", "players": 8},
    {"id": 3, "title": "Crystal Keep", "genre": "MMO", "players": 120},
]

@app.get("/api/status")
async def status():
    return {"status": "ok", "service": "arcadia", "version": "1.0.0"}

@app.get("/api/games")
async def list_games():
    return GAMES

class JoinRequest(BaseModel):
    player: str
    game_id: int

@app.post("/api/join")
async def join_game(req: JoinRequest):
    # naive increment players
    for g in GAMES:
        if g["id"] == req.game_id:
            g["players"] += 1
            return JSONResponse({"message": f"{req.player} joined {g['title']}", "game": g})
    return JSONResponse({"error": "game not found"}, status_code=404)

# Simple WebSocket endpoint for live match events / chat
class ConnectionManager:
    def __init__(self):
        self.active: list[WebSocket] = []

    async def connect(self, ws: WebSocket):
        await ws.accept()
        self.active.append(ws)

    def disconnect(self, ws: WebSocket):
        if ws in self.active:
            self.active.remove(ws)

    async def broadcast(self, message: str):
        living = []
        for conn in self.active:
            try:
                await conn.send_text(message)
                living.append(conn)
            except Exception:
                pass
        self.active = living

manager = ConnectionManager()

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await manager.connect(ws)
    try:
        await manager.broadcast("A new challenger has entered the arena!")
        while True:
            data = await ws.receive_text()
            # echo and broadcast
            await manager.broadcast(f"MSG: {data}")
    except WebSocketDisconnect:
        manager.disconnect(ws)
        await manager.broadcast("A player left the arena.")
    except Exception:
        manager.disconnect(ws)
