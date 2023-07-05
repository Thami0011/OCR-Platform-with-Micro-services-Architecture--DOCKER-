# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app


COPY package.json ./

RUN npm install

COPY . ./
RUN npm run build
EXPOSE 3000

# start app
CMD [ "npm", "start" ]