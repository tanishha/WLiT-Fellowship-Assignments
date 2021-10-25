var express = require('express');
var router = express.Router();
const todos = require('../resources/todo')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'To-Do-App',
    todoList: todos
  });
});

router.get("/add-todo", function (req, res, next) {
  res.render('addTodo', {
    title: 'Add To-Do'
  })
})

router.post('/save-todo', function (req, res, next) {
  // console.log(req.body)
  todos.push({
    ...req.body,
    _id: `00${todos.length}`
  })
  res.redirect('/')
})
router.get('/edit-todo/:id', function (req, res, next) {
  const todo = todos.find(todo => todo._id === req.params.id)
  res.render('editTodo', {
    title: 'Edit To-Do',
    todo: todo
  })
})
router.use(function (req, res, next) {
  if (req.query._method == 'PUT') {
    req.method = 'PUT';
    req.url = req.path;
  }
  next();
});
router.put('/update-todo/:id', function (req, res, next) {
  const index = todos.findIndex(todo => todo._id === req.params.id)
  todos.splice(index, 1, {
    ...req.body,
    _id: req.params.id
  })
  res.redirect('/')
})
router.use(function (req, res, next) {
  if (req.query._method == 'DELETE') {
    req.method = 'DELETE';
    req.url = req.path;
  }
  next();
});
router.delete('/delete-todo/:id', function (req, res, next) {
  const index = todos.findIndex(todo => todo._id === req.params.id)
  todos.splice(index, 1)
  res.redirect('/')
})
module.exports = router;