FROM frontend-mini-challenges-root AS root

FROM node:22

COPY --from=root /app /app

WORKDIR /app/apps/react

COPY package*.json .

WORKDIR /app

RUN npm install

WORKDIR /app/apps/react

COPY . .

EXPOSE 6013

CMD [ "npm", "run", "dev" ]
