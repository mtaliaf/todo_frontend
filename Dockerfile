FROM nginx:stable

# Install Deps.
RUN apt-get update && apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
  apt-get install -y nodejs && \
  npm install -g npm angular-cli typings

RUN mkdir -p /usr/app
COPY package.json /usr/app
COPY typings.json /usr/app

WORKDIR /usr/app
RUN npm install && typings install

COPY . /usr/app

RUN ng build -prod
RUN cp -a ./dist/. /usr/share/nginx/html
