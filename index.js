import server from './src/server.js';
import fs from 'fs'
import sequelize from './src/database/db.js'
import userRoutes from './src/routes/routesUsers.js';
import countryRoutes from './src/routes/contryRoutes.js';
import activitiesRoutes from './src/routes/activitiesRoutes.js';

import CountryModel from './src/database/model/countryModel.js';
import './src/database/model/activityModel.js'
import  './src/database/model/userModel.js';
import './src/database/model/userCountrysModel.js';

const PORT = process.env.PORT || 3001

const json = JSON.parse(fs.readFileSync('api/db.json', 'utf-8'))

async function main () {
    try {
        await sequelize.sync({ force: false })
        console.log('Connection has been established successfully')
        server.listen(PORT, () => {
            console.log('The server is listening on the port:', PORT);
        })
    } catch (error) {
        console.log({ error: error.message })
    }
}

main()
server.use(userRoutes)
server.use(countryRoutes)
server.use(activitiesRoutes)