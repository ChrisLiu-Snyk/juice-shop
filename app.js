/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})

async function getUserUnsafe1(req, res) {
  const userId = req.params.id; // User-supplied ID from URL
  // DANGEROUS: Direct string concatenation
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  try {
    const user = await db.query(query); // Execute raw query
