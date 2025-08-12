FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --include=optional
RUN npm install -D vite
COPY . .
EXPOSE 55786
CMD ["npm", "run", "dev"]