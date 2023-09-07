/**
 * Interface to enforce CRUD operations across all repositories
 */
interface CRUD<T> {
    /**
     * Create a new T record in the table of T
     * @param entry - T object to be inserted
     * @returns The T record inserted, null if operation doesn't succeed
     */
    createOne(entry: T): Promise<boolean>;

    /**
     * Create a batch of new T records in the table of T
     * @param entries - T objects to be inserted
     * @returns All the T records inserted as T[], an empty array if operation doesn't succeed
     */
    createMany(entries: T[]): Promise<number>;

    /**
     * Retrieve the T record from the table of T with given name and email combination
     * @param name - Name of user
     * @param email - Email of user
     * @returns The T record from the table of T with name and email combination
     */
    findOne(name: string, email: string): Promise<T | null>;

    /**
     * Retrieve all T records from the table of T
     * @returns All T records from the table of T as a T[]
     */
    findAll(): Promise<T[]>;

    /**
     * Update an existing T record in the table of T with given name and email combination
     * @param name - Name of user
     * @param email - Email of user
     * @returns The updated T object, null otherwise
     */
    updateOne(name: string, email: string, entry: T): Promise<boolean>;

    /**
     * Delete the T record from the table of T with given name and email combination
     * @returns The T record from the table of T with given name and email combination
     */
    deleteOne(name: string, email: string): Promise<boolean>;
}

export { CRUD };
