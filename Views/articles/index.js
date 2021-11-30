const layout = require('../layout');

module.exports = ({ articles }) => {
  const renderedArticles = articles
    .map(article => {
      return `
            <div class="col-lg-4 col-md-6 col-sm-12 article">
                <a href="articles/${article.id}">
                    <img class="img-fluid" src="data:image/png;base64, ${article.image}" alt="${article.title}">
                    <h4>${article.title}</h4>
                    <p>${article.content}</p>
                </a>
            </div>
      `;
    })
    .reverse().join('\n');

    return layout({
        content: `
            <div class="container row all-articles">
                <h2 class="col-10">Articles</h2>
                ${renderedArticles}  
            </div>
        `,
        menu:  `
        <div class="menu row text-center col-12">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/"><h3>Frontpage</h3></a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/products"><h3>Products</h3></a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/articles"><h3>Articles</h3></a>
                <svg height="5" width="5">
                    <circle cx="2" cy="2" r="2" fill="black" />
                </svg>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/cart"><h3>Cart</h3></a>
            </div>
        </div>
        `,
        bg: 'all'
    });
};
