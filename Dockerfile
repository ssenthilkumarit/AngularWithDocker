 #FROM node:14.17.0-alpine as build-step
 #RUN mkdir -p /app
 #WORKDIR /app
 #COPY ./package.json /app
 #RUN npm install
 #RUN npm install -g @angular/cli
 #COPY . /app
 #RUN ng serve --host 0.0.0.0
 
FROM node:14.17.0-alpine
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9
COPY . /app
RUN chgrp -R 0 /app/.angular/cache && chmod -R g+rwX /app/.angular/cache
EXPOSE 4200
CMD ng serve --configuration=production --host 0.0.0.0 --disable-host-check
