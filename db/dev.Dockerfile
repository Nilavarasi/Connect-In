FROM postgres

ADD ./backup/start.sql /docker-entrypoint-initdb.d
ADD ./backup/permissions.sql /docker-entrypoint-initdb.d
