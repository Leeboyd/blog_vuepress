FROM node:11-alpine

RUN mkdir -p /home/blog
WORKDIR /home/blog
VOLUME /home/blog

RUN npm install -g vuepress@0.14.10

COPY . .

RUN npm install

EXPOSE 9898

CMD yarn blog:dev