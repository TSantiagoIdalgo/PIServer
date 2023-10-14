import server from './src/server.js';
import sequelize from './src/database/db.js'
import userRoutes from './src/routes/routesUsers.js';
import countryRoutes from './src/routes/contryRoutes.js';
import activitiesRoutes from './src/routes/activitiesRoutes.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import './src/database/associations/associations.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3001

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

export default __dirname