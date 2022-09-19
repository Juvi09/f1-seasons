FROM node:16-alpine

WORKDIR /app

COPY package.json npm.lock ./
RUN npm install

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD [ "npm","dev" ]