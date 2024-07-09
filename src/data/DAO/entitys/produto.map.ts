import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class ProdutoMap extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nome: string;

    @Column()
    preco: number;

    @Column()
    descricao?: string;

    @Column()
    categoria: ProdutoMap;
}