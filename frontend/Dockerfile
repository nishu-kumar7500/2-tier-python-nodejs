# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# copy only what is needed to install deps
COPY package.json ./
COPY vite.config.mjs ./
COPY postcss.config.cjs ./       
COPY tailwind.config.cjs ./      

# Install dependencies
RUN npm install

# Copy the rest of code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the built app using nginx
FROM nginx:1.25-alpine

# Copy the Vite output from the builder to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

