const mongoose = require('mongoose');
const app = require('./app');

const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, API_VERSION, IP_SERVER, JWT_SECRET_KEY} = require('./constants');

const PORT = 3977;

moongose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(()=> {
        console.log("Conexión a la base de datos exitosa exitosa");

        app.listen(PORT, ()=> {
            console.log("########################");
            console.log("####### API REST #######");
            console.log("########################");
            
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);

        })
    })
    .catch((error) => {
        console.log("Error conectando la base de datos", error);
    });
