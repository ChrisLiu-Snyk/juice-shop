const express = require('express')
const router = express.Router()

/**
 * Source:
 * User-controlled input
 */
function getUserInput (req) {
  return req.body.data
}

/**
 * Unsafe deserialization + execution
 */
function unsafeDeserialize (input) {
  // Simulating unsafe deserialization behavior
  const obj = JSON.parse(input)

  // Dangerous: executing data from deserialized object
  return eval(obj.code)
}

router.post('/deserialize-poc', express.json(), (req, res) => {
  try {
    const input = getUserInput(req)
    const result = unsafeDeserialize(input)
    res.send(result)
  } catch (e) {
    res.status(500).send(e.message)
  }
})

module.exports = router
