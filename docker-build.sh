#!/bin/bash

DOCKER_USER="visyond"
DOCKER_PASSWORD=""
IMAGE_TAG=$(git rev-parse --short "${GITHUB_SHA::6}")
IMAGE_NAME="visyond-cms"

echo "hash: " $GITHUB_HASH

# Adding docker-ce repository
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
echo

# Installing docker-ce and docker-ce-cli
sudo apt install -y docker-ce docker-ce-cli
sudo systemctl enable docker
sudo systemctl start docker
echo

sudo docker build -t $DOCKER_USER/$IMAGE_NAME:$IMAGE_TAG -f docker/Dockerfile.dev .
