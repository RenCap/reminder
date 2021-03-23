FROM node:14.15
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]