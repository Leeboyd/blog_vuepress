FROM node:11-alpine

RUN mkdir -p /home/blog

WORKDIR /home/blog

RUN yarn global add vuepress@0.14.10

COPY . .

RUN yarn add -- flat

EXPOSE 9898

CMD yarn blog:dev