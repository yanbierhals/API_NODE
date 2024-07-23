import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from "typeorm";

@Entity({ name: 'PRODUTO' })
export class ProdutoMap extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { name: 'ID' })
    id: number;

    @Column({ name: 'NOME' , nullable: true })
    nome: string;

    @Column({ name: 'PRECO' , nullable: true })
    preco: number;

    @Column({ name: 'DESCRICAO', nullable: true })
    descricao?: string;

    @Column({ name: "CATEGORIA_ID", nullable: false }) // Define a coluna de chave estrangeira
    categoria: number;
}
