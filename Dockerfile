FROM node:latest

RUN mkdir -p /mytin_app
WORKDIR /mytin_app
ADD . /mytin_app

RUN npm i
RUN npm i ts-node
RUN npm i typescript


RUN export NODE_OPTIONS=--max_old_space_size=1024
CMD ["npm", "start"]    