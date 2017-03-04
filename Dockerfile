FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY . /demo

EXPOSE 8080