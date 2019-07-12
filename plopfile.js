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
            path: 'server/controllers/{{name}}Controller.js',
            templateFile: 'server/plop-templates/controller.hbs'
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
            path: 'server/models/{{name}}.js',
            templateFile: 'server/plop-templates/model.hbs'
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
            path: 'server/controllers/{{name}}Controller.js',
            templateFile: 'server/plop-templates/controller.hbs'
        },
        {
            type: 'add',
            path: 'server/models/{{name}}.js',
            templateFile: 'server/plop-templates/model.hbs'
        }
    ]
  })
}
