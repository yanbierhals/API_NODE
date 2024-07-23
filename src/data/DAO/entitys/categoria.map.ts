import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'CATEGORIA' })
export class CategoriaMap extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { name: 'ID' })
    id: number;

    @Column({ name: 'NOME', nullable: true })
    nome: string;

    @Column({ name: 'DESCRICAO', nullable: true })
    descricao?: string;
}
