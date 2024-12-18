import { Elysia, t } from "elysia"
import { example } from "./controllers/example.controller"
import { swaggerConfig } from "./configs/swagger.config"
import { tlsConfig } from "./configs/tls.config"
import cors from "@elysiajs/cors"
import { mongodb } from "./configs/database.config"
import { jwtconfig } from "./configs/jwt.config"
import { AccountController } from "./controllers/account.controller"
import { UserController } from "./controllers/user.controller"
import staticPlugin from "@elysiajs/static"


mongodb.connect()

const app = new Elysia()
  .use(cors())
  .use(jwtconfig)
  .use(swaggerConfig)
  //.use(example)
  .use(staticPlugin({
    assets: "public/uploads",
    prefix: "img",
  }))
  .use(AccountController)
  .use(UserController)
  .use(AbortController)
  .listen({
    port: Bun.env.PORT || 8000,
    tls: tlsConfig
  })

let protocol = 'http'
if ('cert' in tlsConfig)
  protocol = 'https'
console.log(`🦊 Elysia is running at ${protocol}://${app.server?.hostname}:${app.server?.port}`)