From node:20-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN chown -R node:node /usr/local/lib/node_modules
WORKDIR /home/node/app


COPY package*.json ./

USER node

RUN npm install -g json-server
RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]


