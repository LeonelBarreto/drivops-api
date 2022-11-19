create database drivops_api;

drop table if exists usuarios 

create table usuarios(
    id serial primary key,
    nome varchar(200),
    email text not null unique,
    senha text not null
)