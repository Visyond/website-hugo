#!/bin/bash

DOCKER_USER=""
DOCKER_PASSWORD=""

# For development (This is used to run and update the CMS app in Docker without building the app or the image)

docker build -t $DOCKER_USER/visyond:cms-app-dev -f docker/Dockerfile.dev .
docker run --name visyong-cms-dev -v ~/Visyond/website-hugo:/app -p 3000:3000 -p 3001:3001 -itd $DOCKER_USER/visyond:cms-app-dev
docker exec -it visyond-cms-dev bash # then you can run npm install and npm start)


# For production

docker build -t $DOCKER_USER/visyond:cms-app -f docker/Dockerfile .
docker login -u $DOCKER_USER -p $DOCKER_PASSWORD
docker push $DOCKER_USER/visyond:cms-app
docker run --name visyond-cms -p 80:80 -itd visyond:cms-app

