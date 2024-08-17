FROM frontend-mini-challenges-root AS root

FROM node:22

COPY --from=root /app /app

WORKDIR /app/apps/vue

COPY package*.json .

WORKDIR /app

RUN npm install

WORKDIR /app/apps/vue

COPY . .

EXPOSE 6014

CMD [ "npm", "run", "dev" ]
