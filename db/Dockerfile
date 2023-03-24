FROM mysql/mysql-server:8.0

RUN echo "USE mysql;" > /docker-entrypoint-initdb.d/timezones.sql &&  mysql_tzinfo_to_sql /usr/share/zoneinfo >> /docker-entrypoint-initdb.d/timezones.sql

ENV MYSQL_DATABASE=laravel \
    MYSQL_USER=user \
    MYSQL_PASSWORD=secret \
    MYSQL_ROOT_PASSWORD=secret \
    TZ=Australia/Sydney

COPY ./my.cnf /etc/my.cnf

RUN chmod 644 /etc/my.cnf