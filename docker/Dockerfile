FROM nginx:latest

RUN mkdir -p /srv/cms-release
COPY dist /srv/cms-release
COPY docker/visyond.conf /etc/nginx/conf.d/
RUN rm -rf /etc/nginx/conf.d/default.conf 
COPY docker/entrypoint.sh /

CMD "/entrypoint.sh"
