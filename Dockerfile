FROM node:10.7.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

ENV NODE_ENV production

RUN yarn install --production

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
