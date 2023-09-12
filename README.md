# RESTful API with NodeJS, ExpressJS, TypeScript, PostgreSQL, and Prisma

It performs CRUD operations against the PostgreSQL DB through Prisma as an ORM
and using a service, controller, and repository layer.

A user is uniquely identified by name + email.
A user can have 0 or more tasks assigned to them.
See the table [schemas](./db/table.sql) for a clearer definition between the 2.

Import the [postman schema](./people_tasks.postman_collection.json) into postman
to see a description of each endpoint and test it.

Assuming you are connecting to PostgreSQL locally,
you will need to create a `.env` file on the project's root directory and put the
following contents on it:

```
NODE_ENV=dev
HOST=localhost
USR=<DB USER>
PASSWORD=<PWD FOR DB USER>
DB=<DB NAME>
DIALECT=postgres
PORT=5432
APP_PORT=3000
DB_URL=postgresql://${USR}:${PASSWORD}@${HOST}:${PORT}/${DB}
```

Start the server by running:

```
npm install
npm start
```
