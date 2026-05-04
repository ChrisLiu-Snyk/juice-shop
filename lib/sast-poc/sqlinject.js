const express = require('express')
const mysql = require('mysql2')

const router = express.Router()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'test_user',
  password: 'test_password',
  database: 'test_db'
})

/**
 * Source:
 * User-controlled input from query parameter
 */
function getUserInput (req) {
  return req.query.username
}

/**
 * Helper:
 * Builds a SQL statement using raw user input
 */
function buildQuery (username) {
  return "SELECT * FROM users WHERE username = '" + username + "'"
}

/**
 * Sink:
 * Executes the unsafe SQL query
 */
function runQuery (query, res) {
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    return res.json(results)
  })
}

/**
 * Test endpoint:
 * /sqli-poc?username=admin
 */
router.get('/sqli-poc', (req, res) => {
  const username = getUserInput(req)
  const query = buildQuery(username)
  runQuery(query, res)
})

module.exports = router
