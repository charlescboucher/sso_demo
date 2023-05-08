FROM node:18-alpine

COPY . /usr/local/app/

WORKDIR /usr/local/app

RUN npm install

EXPOSE 3002

CMD ["npm", "start"]