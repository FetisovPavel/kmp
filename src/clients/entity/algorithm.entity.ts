import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('clients')
export class ClientsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

}