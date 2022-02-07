FROM node:16

#RUN  npm install @vue/cli -g

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install pm2 -g && npm install

# Bundle app source
COPY . .

WORKDIR /usr/src/app/client
RUN npm install && npm run build

EXPOSE 3000

WORKDIR /usr/src/app
CMD [ "pm2-runtime", "ecosystem.config.js", "--env=production"]
