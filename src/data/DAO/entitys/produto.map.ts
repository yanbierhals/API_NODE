import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Categoria } from "../../../interfaces/categoria.interface";

@Entity()
export class Produto extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nome: string;

    @Column()
    preco: number;

    @Column()
    descricao?: string;

    @Column()
    categoria: Categoria;
}