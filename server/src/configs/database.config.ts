import mongoose from "mongoose"

const username = Bun.env.MONGGO_DB_ID || 'your-username'
const password = Bun.env.MONGGO_DB_PASSWORD || 'your-password'
const db_name = Bun.env.MONGO_DBNAME || 'tinner_app'
const uri = `mongodb+srv://${username}:${password}@cluster0.gydkl.mongodb.net/?retryWrites=true&w=majority&appName=${db_name}`

export const MongoDB = {
    connect: async function () {
        try {
            await mongoose.connect(uri)
            console.log('---- MongoDB  Connected ----')

        }
        catch (error) {
            console.error(); ('---- MongoDB Connection Error ----')
            console.error(error)
        }
    }
}