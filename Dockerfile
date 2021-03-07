FROM node:14 as builder

COPY yt /yt
WORKDIR /yt

RUN apt-get update
RUN npm install -g @angular/cli

EXPOSE 4200

CMD ng serve