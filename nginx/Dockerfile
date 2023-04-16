FROM nginx:1.20-alpine
COPY ./frontend/dist /var/www
COPY ./backend/src /data
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
WORKDIR /data