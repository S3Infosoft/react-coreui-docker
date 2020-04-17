const express = require("express");
const router = express.Router();
const fetch = require("cross-fetch");

// @route GET api/calllogs/logs
// @desc Get all logs
// @access Private
// Still pending to work
router.get("/logs", (req, res) => {
  fetch("https://developers.myoperator.co/search", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: "token=84e28fd79b1cd6a3dc2907c036991ccd",
  })
    .then((res) => res.json())
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;