#!/bin/bash

REGISTRY_USER=$1
REGISTRY_PASSWORD=$2
GIT_COMMIT=$(git rev-parse --short "${GITHUB_SHA}")
IMAGE_TAG=${{ github.ref }}
IMAGE_NAME="visyond-cms"

# Building/Pushing the Docker image
docker login -u $REGISTRY_USER -p $REGISTRY_PASSWORD

docker build -t $REGISTRY_USER/$IMAGE_NAME:$GIT_COMMIT -f docker/Dockerfile .
docker tag $REGISTRY_USER/$IMAGE_NAME:$GIT_COMMIT $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG
docker tag $REGISTRY_USER/$IMAGE_NAME:$GIT_COMMIT $REGISTRY_USER/$IMAGE_NAME:latest

docker push $REGISTRY_USER/$IMAGE_NAME:$GIT_COMMIT
docker push $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG
docker push $REGISTRY_USER/$IMAGE_NAME:latest


