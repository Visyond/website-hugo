#!/bin/bash

REGISTRY_USER=${{ secrets.REGISTRY_USER }}
REGISTRY_PASSWORD=${{ secrets.REGISTRY_PASSWORD }}
IMAGE_TAG=$(git rev-parse --short "${GITHUB_SHA::6}")
IMAGE_NAME="visyond-cms"

# Building/Pushing the Docker image
docker login -u $REGISTRY_USER -p $REGISTRY_PASSWORD

sudo docker build -t $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG -f docker/Dockerfile.dev .
sudo docker tag $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG $REGISTRY_USER/$IMAGE_NAME:latest

sudo docker push $REGISTRY_USER/$IMAGE_NAME:$IMAGE_TAG
sudo docker push $REGISTRY_USER/$IMAGE_NAME:latest
