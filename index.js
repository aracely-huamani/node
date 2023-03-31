const { Client } = require('pg')


const obtenerEstudiante =async()=>{
    const client = new Client({
        user:"ara",
        host:"dpg-cgj4d6ubb6mo06jgija0-a.oregon-postgres.render.com",
        database:"prueba_78iv",
        password:"fZ6lcZIiHgY7AmRgp494zoWTS8xfAHdy",
        port:"5432",
        ssl:{
            rejectUnauthorized:false,
        }
    });

    await client.connect()
    const res = await client.query("SELECT * FROM estudiante");
    const result=res.rows;
    await client.end();
    return result;
};

obtenerEstudiante().then((result)=>{
    console.log(result)
});

 
