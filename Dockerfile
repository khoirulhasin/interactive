FROM node:16.13.1
WORKDIR /code
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i
COPY . .