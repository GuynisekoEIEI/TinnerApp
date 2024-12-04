import Elysia from "elysia"
import { AuthmiddleWare, AuthPayload } from "../middlewares/auth.middleware"
import { UserDto } from "../types/user.type"
import { UserService } from "../services/user.service"

export const UserController = new Elysia({
    prefix: "/api/user",
    tags: ['User']
})
    .use(UserDto)
    .use(AuthmiddleWare)

    .get('/all', () => {
        return {
            text: "Hello word"
        }
    }, {
        isSignIn: true
    })

    .get('/', ({ query, Auth }) => {
        const user_id = (Auth.payload as AuthPayload).id
        return UserService.get(query, user_id)
    }, {
        detail: { summary: "get User" },
        query: "pagination",
        response: "users",
        isSignIn: true,
    })
