import { Person } from "../model/person.js";
import { PersonRepository } from "../repository/person.js";

class PersonService {
    private personRepo: PersonRepository;

    constructor() {
        this.personRepo = new PersonRepository();
    }

    async deleteOne(id: number): Promise<Person> {
        return this.personRepo.deleteOne(id);
    }
}

export { PersonService };
