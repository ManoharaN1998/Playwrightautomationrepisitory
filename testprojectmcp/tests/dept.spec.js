const mysql = require('mysql2/promise');
const { test } = require('@playwright/test');

test('Display all records from dept table', async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gentechdb',
  });
  const [rows, fields] = await connection.execute('SELECT * FROM dept');
  // Print column names
  console.log('Columns:', fields.map(f => f.name).join(', '));
  // Print all records
  console.table(rows);
  await connection.end();
});