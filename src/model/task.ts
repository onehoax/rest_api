/**
 * Person record in DB
 */
type Person = {
    person_id: number;
    name: string;
    email: string | null;
    phone?: string | null;
};

/**
 * Task record in DB
 */
type Task = {
    task_id: number;
    person_id: number;
    name: string;
    description: string | null;
    created_at: Date;
};

export { Person, Task };
