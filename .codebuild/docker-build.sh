#!/usr/bin/env bash

# Create Dockerfiles for components
mv .codebuild/nginx.docker .codebuild/react_nginx.docker

for file in react_web
do
  cp Dockerfile .codebuild/$file.docker
done


# Build Docker images
for file in .codebuild/*.docker
do
  tag=$(basename -- "$file" ".${file##*.}")
  docker build -t $tag -f $file .
done

