/**
 * Task record in DB
 */
type Task = {
    task_id?: number;
    person_id: number;
    name: string;
    description?: string;
    created_at?: Date;
};

export { Task };
