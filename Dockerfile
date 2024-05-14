FROM node:16.20.2

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 8998

CMD ["node", "index.js"]
