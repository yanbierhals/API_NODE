import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class CategoriaMap extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    nome: string;
    @Column()
    descricao?: string;
}