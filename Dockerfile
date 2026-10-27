
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache python3 make g++ 
COPY --from=builder /app /app
RUN npm rebuild better-sqlite3 --build-from-source
RUN mkdir -p /app/data && chmod 777 /app/data
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
