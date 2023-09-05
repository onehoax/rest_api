import { Table, Column, Model } from "sequelize-typescript";

@Table
class Task extends Model {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    createdDate: string;

    @Column
    updatedDate: string;

    @Column
    createdBy: string;

    @Column
    updatedBy: string;
}

export { Task };
