FROM node:19-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY index.js index.spec.js ./

ENTRYPOINT ["npm", "test"]