#!/bin/bash

REGISTRY_USER=$1
REGISTRY_PASSWORD=$2
IMAGE_TAG=$(git rev-parse --short "${GITHUB_SHA}")
IMAGE_NAME="visyond-cms"

# Building/Pushing the Docker image
docker login -u $REGISTRY_USER -p $REGISTRY_PASSWORD

docker build -t $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG -f docker/Dockerfile .
docker tag $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG $REGISTRY_USER/$IMAGE_NAME:latest

docker push $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG
docker push $REGISTRY_USER/$IMAGE_NAME:latest


