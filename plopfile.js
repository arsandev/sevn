module.exports = function (plop) {
    // controller generator
    plop.setGenerator('api', {
        description: 'mesin pembuat api (sistem model dan controller)',
        prompts: [{
            type: 'input',
            name: 'name',
            message: '[TEGARSANTOSA]: masukan nama api'
        }],
        actions: [
          {
              type: 'add',
              path: 'server/controllers/{{name}}.js',
              templateFile: 'server/plop-templates/controller.hbs'
          },
          {
              type: 'add',
              path: 'server/models/{{name}}.js',
              templateFile: 'server/plop-templates/model.hbs'
          }
      ]
    });
};
