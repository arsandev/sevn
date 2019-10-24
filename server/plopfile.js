module.exports = function (plop) {
  plop.setGenerator('controller', {
      description: 'make a controller',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'your controller name'
      }],
      actions: [
        {
            type: 'add',
            path: 'controllers/{{name}}Controller.js',
            templateFile: 'templates/controller.hbs'
        },
    ]
  })
  plop.setGenerator('model', {
      description: 'make a model',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'your controller name'
      }],
      actions: [
        {
            type: 'add',
            path: 'models/{{name}}.js',
            templateFile: 'templates/model.hbs'
        }
    ]
  })
  plop.setGenerator('api', {
      description: 'make an api (model and controller)',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'your api name'
      }],
      actions: [
        {
            type: 'add',
            path: 'controllers/{{name}}Controller.js',
            templateFile: 'templates/Controller.hbs'
        },
        {
            type: 'add',
            path: 'models/{{name}}.js',
            templateFile: 'templates/Model.hbs'
        }
    ]
  })
}
