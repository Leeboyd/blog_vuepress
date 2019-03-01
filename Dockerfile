FROM node:11-alpine

RUN mkdir -p /home/blog
WORKDIR /home/blog
VOLUME /home/blog

RUN yarn global add vuepress@0.14.9

COPY . .

EXPOSE 9898

ENV CHOKIDAR_USEPOLLING true
CMD yarn blog:dev $CHOKIDAR_USEPOLLING
# docker run -dit --name blog \
# -p 9898:9898 \
# -v $(pwd)/:/home/blog boylee0101/blog:1.0.0