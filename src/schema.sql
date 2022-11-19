create database drivops_api;

drop table if exists usuarios; 

create table usuarios(
    id serial primary key,
    nome varchar(200),
    email varchar(200) not null unique,
    senha text not null
)

drop table if exists carros; 

create table carros(
    id serial primary key,
    modelo varchar(15) not null,
    fabricante varchar (20) not null,
    estado varchar(10) not null default 'novo',
    ano integer not null,
    valor integer not null
)

drop table if exists vendedores;

create table vendedores(
    id serial primary key,
    usuario_id integer not null,
    nome varchar(200) not null,
    sexo text default "masculino" not null
)

drop table if exists vendas;

create table vendas(
    id serial primary key,
    modelo_id integer not null,
    vendedor_id integer not null,
    data date not null,
    valor integer not null,
    foreign key (modelo_id) references carros(id),
    foreign key (vendedor_id) references vendedores(id)
)