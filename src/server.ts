import app from "./app"

const server = app.listen(app.get("port"), ()=> console.log(`server running at port ${app.get("port")} in ${app.get("env")} mode`))

export default server