DROP TABLE IF EXISTS people, tasks;

CREATE TABLE people (
   person_id    INT GENERATED ALWAYS AS IDENTITY,
   name         VARCHAR(20) NOT NULL,
   email        VARCHAR(20) NOT NULL, 
   phone        VARCHAR(20),
      PRIMARY KEY(person_id),
      UNIQUE (name, email)
);

CREATE TABLE tasks (
   task_id      INT GENERATED ALWAYS AS IDENTITY,
   person_id    INT NOT NULL,
   name         VARCHAR(50) NOT NULL,
   description  VARCHAR(100),
   created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(task_id),
      FOREIGN KEY(person_id)
         REFERENCES people(person_id)
            ON UPDATE CASCADE
            ON DELETE CASCADE
);