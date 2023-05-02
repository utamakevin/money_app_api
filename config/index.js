require("dotenv").config()

let missing = ["PORT", "DATABASE_URL"].filter(
  key => process.env[key] === undefined
)

if (missing.length > 0) {
  throw Error(`missing environment variables for ${missing.join(", ")}`)
}

const deployment = {
  prod: {
    connectionString:
      "postgres://money_app_user:zqLqHMUWfmOXKAL6ioqLyKOh5zmIx7WM@dpg-ch7s455gk4q7lmu02u2g-a/money_app",
  },
  dev: {
    connectionString: process.env.DATABASE_URL,
  },
}

let link
if (!process.env.DATABASE_URL) {
  link = deployment.prod
} else {
  link = deployment.dev
}

module.exports = {
  port: process.env.PORT,
  db: link,
}
