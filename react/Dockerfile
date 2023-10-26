FROM node:latest

COPY . /home/app

WORKDIR /home/app

EXPOSE 5173

RUN npm install --force

CMD ["npm","run","dev"]