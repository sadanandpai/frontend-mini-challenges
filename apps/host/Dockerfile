FROM frontend-mini-challenges-root AS root

FROM node:22

COPY --from=root /app /app

WORKDIR /app/apps/host

COPY package*.json .

WORKDIR /app

RUN npm install

WORKDIR /app/apps/host

COPY . .

EXPOSE 6010

CMD [ "npm", "run", "dev" ]
