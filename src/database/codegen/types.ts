import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type comuna = {
    comuna_id: Generated<number>;
    comuna_nombre: string;
    comuna_regionId: number;
    comuna_puntosSvg: string;
};
export type region = {
    region_id: Generated<number>;
    region_nombre: string;
    region_puntosSvg: string;
};
export type DB = {
    comuna: comuna;
    region: region;
};
