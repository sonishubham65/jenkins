FROM node:latest
WORKDIR /usr/src/app
EXPOSE 3001
COPY package.json .
ENV mode production
RUN npm install
RUN npm install -g nodemon