FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=laravel \
    MYSQL_USER=user \
    MYSQL_PASSWORD=secret \
    MYSQL_ROOT_PASSWORD=secret \
    TZ=Australia/Sydney

COPY ./my.cnf /etc/my.cnf

RUN chmod 644 /etc/my.cnf

# mysql -u $MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE　にてログイン