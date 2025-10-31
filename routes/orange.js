/*
 * New Orange endpoint route.
 */

const express = require('express')
const router = express.Router()

// GET /api/orange
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Orange endpoint is live!' })
})

module.exports = router
