const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const config = require("./config")
const Entry = require("./models/entry")
const { db } = require("./config")

app.use(express.static("public"))
app.use(express.json())


app.get("/api/entry", (req, res, next) => {
  Entry.findAll()
    .then(entries => res.json(entries))
    .catch(next)
})
app.get("/api/entry/searchtc", (req, res, next) => {
  Entry.findByTypeCategory(req.query.t, req.query.c)
    .then(entries => res.json(entries))
    .catch(next)
})

app.get("/api/entry/searchtm", (req, res, next) => {
  Entry.findByTypeMonth(req.query.t, req.query.m)
    .then(entries => res.json(entries))
    .catch(next)
})

app.get("/api/entry/revenue", (req, res, next) => {
  Entry.findRevenue()
    .then(entries => res.json(entries))
    .catch(next)
})

app.get("/api/entry/expense", (req, res, next) => {
  Entry.findExpense()
    .then(entries => res.json(entries))
    .catch(next)
})

app.get("/api/entry/revenue/categories", (req, res, next) => {
  Entry.findRevenueCategories()
    .then(entries => res.json(entries))
    .catch(next)
})

app.get("/api/entry/expense/categories", (req, res, next) => {
  Entry.findExpenseCategories()
    .then(entries => res.json(entries))
    .catch(next)
})

app.get("/api/entry/revenue/months", (req, res, next) => {
  Entry.findRevenueMonths()
    .then(entries => res.json(entries))
    .catch(next)
})

app.get("/api/entry/expense/months", (req, res, next) => {
  Entry.findExpenseMonths()
    .then(entries => res.json(entries))
    .catch(next)
})

app.post("/api/entry", (req, res, next) => {
  Entry.create(req.body)
    .then(entry => res.json(entry))
    .then(res => console.log(req.body))
    .catch(next)
})

app.put("/api/entry/:id", (req, res, next) => {
  try {
    Entry.update(req.params.id, req.body)
      .then(entry => res.json(entry))
      // .catch(next)
  } catch (err) {
    console.log(err)
  }
})

app.delete("/api/entry/:id", (req, res, next) => {
  const { id } = req.params

  Entry.destroy(id)
    .then(() => res.json({ message: `Entry ${id} has been removed` }))
    .catch(next)
})

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
