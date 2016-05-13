FROM node
MAINTAINER ambethia

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN JOBS=MAX npm install --production

COPY . /usr/src/app

ENTRYPOINT ["npm", "start"]
