const express = require("express")
const app = express()

const productsRouter = require("./routes/products.router")

const PORT = 3000

app.use(express.json())

app.use("/products", productsRouter)

app.get("/", (request, response) => {
  response.json({
    greeting: "hello"
  })
})

app.listen(PORT, (error) => {
  if (error)
    console.log(error)
  else
    console.log(`Server is running on port ${PORT}`)
})