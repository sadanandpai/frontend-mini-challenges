FROM frontend-mini-challenges-root AS root

FROM node:22

COPY --from=root /app /app

WORKDIR /app/apps/javascript

COPY package*.json .

WORKDIR /app

RUN npm install

WORKDIR /app/apps/javascript

COPY . .

EXPOSE 6012

CMD [ "npm", "run", "dev" ]
