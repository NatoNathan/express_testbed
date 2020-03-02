const express = require("express");
const router = express.Router();
const PouchDB = require("pouchdb");

let db = PouchDB("user");

router.get("/", function(req, res) {
  db.allDocs()
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({ error: "something blew up", reason: err.reason });
    });
});
router.get("/:userid", function(req, res) {
  db.get(req.params.userid)
    .then(function(doc) {
      res.json(doc);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({ error: "something blew up", reason: err.reason });
    });
});
router.post("/", function(req, res) {
  db.put(req.body)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({ error: "something blew up", reason: err.reason });
    });
});
router.put("/:userid", function(req, res) {
  db.get(req.params.userid)
    .then(function(doc) {
      return db.put({
        _id: req.params.userid,
        _rev: doc._rev,
        ...req.body
      });
    })
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({ error: "something blew up", reason: err.reason });
    });
});
router.delete("/:userid", function(req, res) {
  db.get(req.params.userid)
    .then(function(doc) {
      return db.remove(doc);
    })
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send({ error: "something blew up", reason: err.reason });
    });
});

module.exports = router;
