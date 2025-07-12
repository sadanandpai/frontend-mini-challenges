FROM node:22-alpine AS root

WORKDIR /app

COPY ./shared/assets ./shared/assets
COPY ./shared/data ./shared/data
COPY ./shared/styles ./shared/styles
COPY ./shared/components ./shared/components

COPY ./apps/angular/package.json ./apps/angular/package.json
COPY ./apps/css/package.json ./apps/css/package.json
COPY ./apps/host/package.json ./apps/host/package.json
COPY ./apps/javascript/package.json ./apps/javascript/package.json
COPY ./apps/react/package.json ./apps/react/package.json
COPY ./apps/vue/package.json ./apps/vue/package.json
COPY package.json package-lock.json ./

COPY .npmrc .
COPY nx.json .
COPY tsconfig.json .

RUN --mount=type=cache,target=/root/.npm npm install

COPY ./apps/angular ./apps/angular
COPY ./apps/css ./apps/css
COPY ./apps/host ./apps/host
COPY ./apps/javascript ./apps/javascript
COPY ./apps/react ./apps/react
COPY ./apps/vue ./apps/vue

EXPOSE 6010
EXPOSE 6011
EXPOSE 6012
EXPOSE 6013
EXPOSE 6014
EXPOSE 6015

CMD [ "npm", "run", "dev" ]
