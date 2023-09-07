/**
 * Person record in DB
 */
type Person = {
    person_id?: number;
    name: string;
    email: string;
    phone?: string | null;
};

export { Person };
