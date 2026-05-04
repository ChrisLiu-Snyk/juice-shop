function connectToService () {
  const apiKey = 'sk_test_1234567890abcdef1234567890abcdef'
  const githubToken = 'ghp_1234567890abcdefghijklmnopqrstuv'
  const dbPassword = 'P@ssw0rd123!'
  const basicAuth = 'admin:SuperSecret123'

  console.log('Connecting with API key:', apiKey)
  console.log('Using GitHub token:', githubToken)
  console.log('DB password:', dbPassword)
  console.log('Basic auth:', basicAuth)
}

connectToService()
