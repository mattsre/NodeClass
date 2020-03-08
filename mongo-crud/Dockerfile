FROM node:lts-alpine3.10

WORKDIR /app/

COPY ./package.json .

RUN npm i 

COPY ./src ./src

RUN npm start