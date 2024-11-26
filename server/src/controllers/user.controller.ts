import Elysia from "elysia"
import { AuthmiddleWare } from "../middlewares/auth.middleware"

export const UserController = new Elysia({
    prefix: "/api/user",
    tags: ['User']
})
    .use(AuthmiddleWare)

    .get('/all', () => {
        return {
            text: "Hello word"
        }
    }, {
        isSignIn: true
    })
