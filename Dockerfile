FROM frontend-mini-challenges-shared-assets AS shared-assets
FROM frontend-mini-challenges-shared-data AS shared-data
FROM frontend-mini-challenges-shared-styles AS shared-styles

FROM node:22 AS root

WORKDIR /app

COPY --from=shared-assets /shared/assets /app/shared/assets

COPY --from=shared-data /shared/data /app/shared/data

COPY --from=shared-styles /shared/styles /app/shared/styles

COPY package*.json .

COPY .npmrc .

COPY tsconfig.json .
