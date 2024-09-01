FROM frontend-mini-challenges-root AS root

FROM node:22

COPY --from=root /app /app

WORKDIR /app/apps/angular

COPY package*.json .

WORKDIR /app

RUN npm install

WORKDIR /app/apps/angular

COPY . .

EXPOSE 6015

CMD [ "npm", "run", "dev" ]
