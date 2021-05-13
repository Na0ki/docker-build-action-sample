FROM node:14-buster-slim

WORKDIR /usr/bin/src

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD [ "node", "server.js" ]
