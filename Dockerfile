# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with npm
RUN npm install

# Copy source code
COPY . .

# Build the Vite project
RUN npm run build

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app

# Install nginx to serve static files
RUN apk add --no-cache nginx

# Copy only the build files from the previous stage (CORRECTED: build instead of dist)
COPY --from=builder /app/build ./build

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
