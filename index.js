import server from './src/server.js';
import sequelize from './src/database/db.js'
import './src/database/associations/associations.js'

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