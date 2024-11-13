import Elysia, { t } from "elysia"

export const example = new Elysia()
    .get("/", () => "Hello Elysia", {
        detail: {
            tags: ["Example"],
            summary: "Get helloworld",
            description: "Numberone"
        }
    })
    .post("/about", ({ body }) => {
        return {
            id: 'xxx',
            msg: 'hello' + body.name
        }
    }, {
        body: t.Object({
            name: t.String(),
        }),
        detail: {
            tags: ["Example"],
            summary: "About",
            description: "Numbertwo"
        }
    })
