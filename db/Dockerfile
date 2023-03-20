FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=laravel \
    MYSQL_PASSWORD=password \
    MYSQL_USER=user \
    MYSQL_ROOT_PASSWORD=MYSQL_PASSWORD \
    TZ=Australia/Sydney

COPY ./my.cnf /etc/my.cnf

RUN chmod 644 /etc/my.cnf