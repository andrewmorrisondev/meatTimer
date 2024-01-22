function land(req, res) {
  res.json('index')
}

function countdown(req, res) {
  res.json('countdown')
}

module.exports = {
  land,
  countdown
}