import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1665790600188 implements MigrationInterface {
    name = 'createTables1665790600188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updtadedAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(120) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
