const express = require('express')
const { exec } = require('child_process')

const router = express.Router()

/**
 * Source:
 * User-controlled input from query parameter
 */
function getUserInput (req) {
  return req.query.cmd
}

/**
 * Helper / intermediate flow:
 * Passes tainted data through another function
 */
function buildCommand (userInput) {
  return 'ping -c 1 ' + userInput
}

/**
 * Sink:
 * Dangerous command execution
 */
function runCommand (command, res) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(stderr || error.message)
    }
    return res.send(stdout)
  })
}

/**
 * Test endpoint:
 * Example:
 *   /sast-poc?cmd=127.0.0.1
 */
router.get('/sast-poc', (req, res) => {
  const input = getUserInput(req)
  const command = buildCommand(input)
  runCommand(command, res)
})

module.exports = router
