FROM node:20.9.0-bullseye

USER root
RUN npm i -g npm@latest vercel npm-check-updates
RUN apt-get update && apt-get -y install vim git

USER node
WORKDIR /home/node/tech-blog
