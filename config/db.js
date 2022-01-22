import mysql from 'mysql';

const db = mysql.createConnection({

    user: 'user',
    host:'146.59.145.84',
    password:'forum2021.!!',
    database:'siteforum'
})
if(db) {
    console.log('connection made');
} else {
    console.log('no connection');
}

export default db;