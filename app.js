import express from 'express'
import router from "./Router/router.js"

const app = express()

app.use(express.json());

app.use('/api/posts', router)

app.listen(8080, () => {
    console.log("Server is now running on port 8080")
})