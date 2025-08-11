# Stage 1: Build the React Vite application
FROM node:alpine

WORKDIR /app

COPY package*.json ./E-Market.Client
RUN npm install

COPY . .
EXPOSE 5173
RUN npm run build