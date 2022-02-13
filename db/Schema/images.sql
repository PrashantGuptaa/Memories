create table if not exists public.images(
id serial not null primary key unique,
memory_id int8 not null,
image varchar,
foreign key(memory_id) references public.memories(id)
on delete cascade
);