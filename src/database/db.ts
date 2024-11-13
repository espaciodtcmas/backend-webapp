import dotenv from 'dotenv';
import { Kysely, PostgresDialect } from 'kysely';
import pkg from 'pg';
import { DB } from './codegen/types.js';

dotenv.config();

const { Pool } = pkg;

const dialect = new PostgresDialect({
    pool: new Pool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        max: 10,
    }),
});

export const db = new Kysely<DB>({
    dialect,
});