FROM node:10 as build

RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM nginx:latest as run

RUN mkdir -p /srv/cms-release
COPY --from=build /app/dist /srv/cms-release
COPY docker/visyond.conf /etc/nginx/conf.d/
RUN rm -rf /etc/nginx/conf.d/default.conf 
COPY docker/entrypoint.sh /

CMD "/entrypoint.sh"
