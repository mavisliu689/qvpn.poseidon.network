# First step: Build with Node.js
FROM node:lts-alpine AS Builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN apk add --no-cache make gcc g++ python && \
  npm install --production --silent
RUN npm config set python python2.7
COPY . /app
RUN npm rebuild node-sass
RUN npm run build

# Deliver the dist folder with Nginx
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=Builder /app/dist /usr/share/nginx/html
COPY entrypoint.sh /
RUN chmod +x entrypoint.sh

CMD ["/entrypoint.sh"]