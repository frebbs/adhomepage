CREATE DATABASE app1;

create table logging (
                         id serial primary key not null,
                         ip_addr varchar(50) not null,
                         date timestamptz default Now()
);