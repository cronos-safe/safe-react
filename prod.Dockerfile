FROM node:14 as react-build-step

# Grab needed environment variables from .env.example
ENV REACT_APP_ENV=staging

RUN apt-get update \
    && apt-get install -y libusb-1.0-0 libusb-1.0-0-dev libudev-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json yarn.lock ./
COPY patches ./patches
RUN yarn install

COPY . .

RUN yarn build

# Deploy the build
FROM nginx:1.21.3-alpine

COPY ./.codebuild/nginx.conf /etc/nginx/nginx.conf
COPY --from=react-build-step /app/build /usr/share/nginx/html/
COPY version.txt /usr/share/nginx/html/version.txt

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
