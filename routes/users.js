const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();

const user = new UserController();

router.get("/", function(req, res) {
  user
    .getAllUsers()
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({
        error: "something blew up",
        reason: err.reason
      });
    });
});
router.get("/:userid", function(req, res) {
  user
    .getUser(req.params.userid)
    .then(function(doc) {
      res.json(doc);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({
        error: "something blew up",
        reason: err.reason
      });
    });
});
router.post("/", function(req, res) {
  user
    .addUser(req.body)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({
        error: "something blew up",
        reason: err.reason
      });
    });
});
router.put("/:userid", function(req, res) {
  user
    .updateUser(req.params.userid, req.body)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({
        error: "something blew up",
        reason: err.reason
      });
    });
});
router.delete("/:userid", function(req, res) {
  user
    .deleteUser(req.params.userid)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({
        error: "something blew up",
        reason: err.reason
      });
    });
});

module.exports = router;
