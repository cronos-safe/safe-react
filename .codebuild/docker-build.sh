#!/usr/bin/env bash

for file in react_nginx; do
  cp prod.Dockerfile .codebuild/$file.docker
done

# Build Docker images
for file in .codebuild/*.docker; do
  tag=$(basename -- "$file" ".${file##*.}")
  docker build -t $tag -f $file .
done
