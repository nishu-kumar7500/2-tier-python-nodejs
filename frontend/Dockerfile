# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY vite.config.js ./

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

# Expose nginx default port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

