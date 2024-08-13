import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',     
    password: '...',
    database: 'ficos',
});

export const selectBySQL = async <T>(sql: string): Promise<{ data: T[]; error: string | null }> => {
    try {
        const [rows] = await pool.query(sql);
        return { data: rows as T[], error: null };
    } catch (error: any) {
        return { data: [], error: error.message };
    }
}