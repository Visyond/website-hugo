#!/bin/bash

KIBANA_HOST="localhost"
BACKEND_HOST="localhost"

sed -i 's/__kibana_host__/'$KIBANA_HOST'/g' /etc/nginx/conf.d/visyond.conf
sed -i 's/__app_host__/'$BACKEND_HOST'/g' /etc/nginx/conf.d/visyond.conf

nginx -g 'daemon off;'
