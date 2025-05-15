import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDataBase(dataBase: SQLiteDatabase){
    await dataBase.execAsync(`
        CREATE TABLE IF NOT EXISTS  pessoa(
            id integer primary key autoincrement,
            nome text not null,
            telefone text not null,
            endereco text not null
        );
    `)
}