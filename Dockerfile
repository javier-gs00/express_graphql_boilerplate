FROM node:10.7.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

ENV NODE_ENV production

RUN npm install --production

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
