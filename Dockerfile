FROM node:11-alpine

RUN mkdir -p /home/blog
WORKDIR /home/blog
VOLUME /home/blog

RUN yarn global add vuepress@0.14.10

COPY . .

EXPOSE 9898

CMD yarn blog:dev
# docker run -dit --name blog \
# -p 9898:9898 \
# -v $(pwd)/:/home/blog boylee0101/blog:1.0.0