# Etap 1: Budowanie aplikacji
FROM node:14 as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Etap 2: Uruchamianie serwera
FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "server.js"]
LABEL autor="Kacper Berliński"