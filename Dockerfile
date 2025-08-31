FROM alpine:latest as builder

RUN apk update && apk add nodejs npm

WORKDIR /myapp

COPY package*.json .

RUN npm install

COPY .  .

RUN npm run build

FROM alpine:latest

RUN apk update && apk add nginx

COPY --from=builder myapp/nginx/nginx.conf etc/nginx/http.d/default.conf

WORKDIR /var/www/logo-express

COPY --from=builder myapp/dist/ .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]