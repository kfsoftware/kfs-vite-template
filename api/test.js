module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    bar: "foo",
    cookies: req.cookies,
  })
}