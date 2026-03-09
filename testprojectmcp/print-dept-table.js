const mysql = require('mysql2/promise');

async function main() {
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
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
