#!/bin/bash

DOCKER_USER="visyond"
DOCKER_PASSWORD="Eiwewi7kEiwewi7k"

docker build -t $DOCKER_USER/visyond:frontend-app -f docker/Dockerfile . 
docker login -u $DOCKER_USER -p $DOCKER_PASSWORD
docker push $DOCKER_USER/visyond:frontend-app
