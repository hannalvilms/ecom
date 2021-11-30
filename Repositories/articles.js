const Repository = require('./repository');

class ArticlesRepository extends Repository{

}

module.exports = new ArticlesRepository('articles.json');
