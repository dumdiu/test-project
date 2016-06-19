FROM node:latest

RUN apt-get update
RUN apt-get install -y netcat

WORKDIR /home/project
COPY package.json ./
ENV NPM_CONFIG_LOGLEVEL error
RUN npm install

CMD /bin/bash /home/project/docker/wait.sh && npm run test-integration
