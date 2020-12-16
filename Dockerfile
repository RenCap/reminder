FROM node:14.15
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT npm start