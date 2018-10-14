FROM node:10.12.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --production

COPY dist /app/dist

RUN yarn cache clean

EXPOSE 8000

CMD ["node", "dist/index.js"]
