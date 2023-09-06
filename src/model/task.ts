type Person = {
    person_id: number;
    name: string;
    email: string | null;
    phone?: string | null;
};

type Task = {
    task_id: number;
    person_id: number;
    name: string;
    description: string | null;
    created_at: Date;
};

export { Person, Task };
