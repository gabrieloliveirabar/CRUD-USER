import { Entity,Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class User{
    @PrimaryColumn("uuid")
    readonly id:string

    @Column({length:60})
    name:string

    @Column({length:60})
    email:string

    @Column()
    isAdm:boolean

    @Column({default:true})
    isActive:boolean

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updtadedAt:Date

    @Column({length:120})
    password:string

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }

}