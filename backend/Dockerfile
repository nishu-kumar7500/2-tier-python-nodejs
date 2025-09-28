# ---------- 1️⃣ Builder stage ----------
FROM python:3.11-slim AS builder

RUN apt-get update && apt-get install -y --no-install-recommends build-essential
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# ---------- 2️⃣ Final runtime image ----------
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy installed packages from build stage
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copy application code
COPY --from=builder /app .

# Expose application port (change if your app uses a different port)
EXPOSE 5000

# Command to run the application (replace with your app start command)
CMD ["uvicorn", "app_main:app", "--host", "0.0.0.0", "--port", "5000"]


