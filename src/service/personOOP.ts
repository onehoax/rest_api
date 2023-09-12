import { Person } from "../model/person.js";
import { PersonRepository } from "../repository/personOOP.js";

class PersonService {
    private personRepo: PersonRepository;

    constructor() {
        this.personRepo = new PersonRepository();
    }

    async createOne(entry: Person): Promise<boolean> {
        return await this.personRepo.createOne(entry);
    }

    async createMany(entries: Person[]): Promise<number> {
        return await this.personRepo.createMany(entries);
    }

    async findOne(name: string, email: string): Promise<Person | null> {
        return await this.personRepo.findOne(name, email);
    }

    async findAll(): Promise<Person[]> {
        return await this.personRepo.findAll();
    }

    async updateOne(name: string, email: string, entry: Person): Promise<boolean> {
        return await this.personRepo.updateOne(name, email, entry);
    }

    async deleteOne(name: string, email: string): Promise<boolean> {
        return await this.personRepo.deleteOne(name, email);
    }
}

export { PersonService };
