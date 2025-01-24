import { user } from './../types/user.type'
import { staticPlugin } from '@elysiajs/static'
import { LikeService } from './../services/like.service'
import Elysia from "elysia"
import { AuthMiddleWare, AuthPayload } from "../middlewares/auth.middleware"
import { UserDto } from "../types/user.type"
import { PhotoDto } from "../types/photo.type"
import { set } from 'mongoose'
import { Auth } from 'mongodb'

export const LikeController = new Elysia({
    prefix: "api/like",
    tags: ['like']
})
    .use(AuthMiddleWare)
    .use(UserDto)


    .put('/', ({ body: { target_id }, set, Auth }) => {
        try {
            const user_id = (Auth.payload as AuthPayload).id
            LikeService.toggleLike(user_id, target_id)
            set.status = "No Content"
        } catch (error) {
            set.status = "Bad Request"
            throw error
        }
    }, {

        detail: { summary: "Toggle Like" },
        isSignIn: true,
        body: "target_id"
    })