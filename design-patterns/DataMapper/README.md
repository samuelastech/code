# Data Mapper

Emulating Java Hibernate framework.

`SessionFactory` is responsible for getting the database config object,
generating a connection, and then passing it to the `Session` which is actually
what is going to do the persistence.