FROM postgres:latest

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=kebab
ENV POSTGRES_DB=projetfullstack

COPY init.sql /docker-entrypoint-initdb.d/
