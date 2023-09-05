CREATE TABLE people (
   person_id    INT GENERATED ALWAYS AS IDENTITY,
   name         VARCHAR(20) NOT NULL,
   email        VARCHAR(20), 
   phone        VARCHAR(20),
   PRIMARY KEY(person_id)
);

CREATE TABLE tasks (
   task_id      INT GENERATED ALWAYS AS IDENTITY,
   person_id    INT NOT NULL,
   name         VARCHAR(50) NOT NULL,
   description  VARCHAR(100),
   PRIMARY KEY(task_id),
   CONSTRAINT fk_person
      FOREIGN KEY(person_id)
		REFERENCES people(person_id)
			ON UPDATE CASCADE
			ON DELETE CASCADE
);

INSERT INTO people
(name)
VALUES 
('Carlos'),
('Andres')
;

INSERT INTO tasks
(person_id, name)
VALUES 
(1, 'Mop'),
(1, 'Dishes'),
(2, 'Dust')
;