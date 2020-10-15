import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    /* Sem column por que n existe image nessa tabela */
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
        // Cadastra ou atualiza imagens automaticamente
    })
    @JoinColumn({ name: 'orphanage_id' }) //Nome da columa que relaciona images e orfanato
    images: Image[];
}