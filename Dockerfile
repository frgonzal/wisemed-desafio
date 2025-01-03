FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/public ./public

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]