const controllers = require('./controllers');

const router = (app) => {
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/', controllers.index);
  app.get('/getName', controllers.getName);
  app.get('/*', controllers.notFound);

  app.post('/setName', controllers.setName);
};

module.exports = router;
