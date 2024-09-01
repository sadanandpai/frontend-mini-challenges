FROM frontend-mini-challenges-root AS root

FROM node:22

COPY --from=root /app /app

WORKDIR /app/apps/css

COPY package*.json .

WORKDIR /app

RUN npm install

WORKDIR /app/apps/css

COPY . .

EXPOSE 6011

CMD [ "npm", "run", "dev" ]
