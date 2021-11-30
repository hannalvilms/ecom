const layout = require('./layout');

module.exports = ({ products, articles }) => {
    const lastThreeProducts = products.map(product => {
        return `
        <div>
            <a href="products/${product.id}">
                <img class="img-fluid" src="data:image/png;base64, ${product.image}" alt="${product.title}">
                <h4>${product.title}</h4>
                <h4>${product.price} €</h4>
            </a>
        </div>
        `;
    }).reverse().slice(0, 3).join('\n');

    const lastTwoArticles = articles.map(article => {
      return `
      <div class="col-lg-6 col-md-10 latest-article">
        <a href="articles/${article.id}">
            <img class="img-fluid" src="data:image/png;base64, ${article.image}" alt="${article.title}">
            <h4>${article.title}</h4>
            <p>${article.content}</p>
        </a>
      </div>
      `;
    }).reverse().slice(0,2).join('\n');

  return layout({
    content: `
    <div class="container-fluid">
        <div class="header row">
        <div class="menu row text-center col-12">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/"><h3>Frontpage</h3></a>
                <svg height="5" width="5">
                    <circle cx="2" cy="2" r="2" fill="black" />
                </svg>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/products"><h3>Products</h3></a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/articles"><h3>Articles</h3></a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
                <a href="/cart"><h3>Cart</h3></a>
            </div>
        </div>
            <div class="logo col-12 text-center">
                <h1>High Plants</h1>
            </div>
        </div>
        <div class="recently-added col-11 row">
            <div class="col-lg-4 col-md-12 title-col">
                <h2>Recently added</h2>
                <a href="/products">
                    <button>View all</button>
                </a>
            </div>
            <div class="col-lg-8 col-md-12 recent-products">
                ${lastThreeProducts}
            </div>
        </div>
        <div class="latest-articles">
            <div class="col-lg-11 col-md-12 opacity-bg row">
                <h2 class="col-lg-12 col-md-10">Latest Articles</h2>
                ${lastTwoArticles}
            </div>
        </div>
    </div>
    `
  });
};
