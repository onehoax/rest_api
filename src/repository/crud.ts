interface CRUD<T> {
    getAll(): Promise<T[]>;

    getOne(): Promise<T>;

    createAll(entries: T[]): Promise<T[]>;

    createOne(entry: T): Promise<T>;

    updateAll(entries: T[]): Promise<T[]>;

    updateOne(entry: T): Promise<T>;

    deleteAll(entries: T[]): Promise<T[]>;

    deleteOne(entry: T[]): Promise<T>;
}

export { CRUD };
