import { updateProfile } from './../types/user.type'
import Elysia from "elysia"
import { AuthmiddleWare, AuthPayload } from "../middlewares/auth.middleware"
import { UserDto } from "../types/user.type"
import { UserService } from "../services/user.service"
import { set } from 'mongoose'

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

    .patch('/', async ({ body, set, Auth }) => {
        try {
            const user_id = (Auth.payload as AuthPayload).id
            await UserService.updateProfile(body, user_id)
            set.status = 200
        } catch (error) {
            set.status = "Bad Request"
            if (error instanceof Error)
                throw new Error(error.message)
            set.status = 500
            throw new Error('Something went wrong, try again later')
        }
    }, {
        detail: { summary: "Update Profile" },
        body: "updateProfile",
        // response: "user",
        isSignIn: true
    })
