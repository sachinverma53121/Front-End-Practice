const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders details to you!');
})
.post((req, res, next) => {
  res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId/')
.get((req, res, next) => {
  res.end('Will send the detail of /leaders/' + req.params.leaderId);
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST not supported on /leaders/'+ req.params.leaderId);
})
.put((req, res, next) => {
  res.end('Update the leader /leaders/'+req.params.leaderId);
})
.delete((req, res, next) => {
  res.end('Deleting leaders/'+req.params.leaderId);
});


module.exports = leaderRouter;