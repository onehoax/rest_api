/**
 * Interface to enforce CRUD operations across all repositories
 */
interface CRUD<T> {
    /**
     * Retrieve all T records from the table of T
     * @returns All T records from the table of T as a T[]
     */
    getAll(): Promise<T[]>;

    /**
     * Retrieve the T record from the table of T people with id
     * @returns The T record from the table of T with id
     */
    getOne(id: number): Promise<T | null>;

    /**
     * Create a batch of new T records in the table of T
     * @param entries - T objects to be inserted
     * @returns All the T records inserted as T[], an empty array if operations doesn't succeed
     */
    createAll(entries: T[]): Promise<T[]>;

    /**
     * Create a new T record in the table of T
     * @param entry - T object to be inserted
     * @returns The T record inserted, null if operations doesn't succeed
     */
    createOne(entry: T): Promise<T | null>;

    /**
     * Batch update existing T records in the table of T
     * @param filterId - Where filterId =
     * @param filter - Where filterId = filter
     * @param newValId - Set newValId =
     * @param newVal - Set newValId = newVal
     * @returns The number of records updated
     */
    updateAll(filterId: string, filter: string | number, newValId: string, newVal: string | number): Promise<number>;

    /**
     * Update an existing T record in the table of T
     * @param entry - T object to be updated
     * @returns The updated T object, null otherwise
     */
    updateOne(entry: T): Promise<T | null>;

    /**
     *
     * @param filterId - Where filterId =
     * @param filter - Where filterId = filter
     * @returns The number of records deleted
     */
    deleteAll(filterId: string, filter: string | number): Promise<number>;

    /**
     * Delete the T record from the table of T people with id
     * @returns The T record from the table of T with id
     */
    deleteOne(id: number): Promise<T>;
}

export { CRUD };
