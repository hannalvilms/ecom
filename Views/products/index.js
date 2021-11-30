const layout = require('../layout');
module.exports = ({ products }) => {

  const renderedProducts = products
    .map(product => {
      return `
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 product">
              <a href="products/${product.id}">
                <img class="img-fluid" src="data:image/png;base64, ${product.image}" alt="${product.title}">
                <h6>${product.title}</h6>
                <h6>${product.price} €</h6>
              </a>
              <form action="/cart/products" method="POST">
                <input hidden value="${product.id}" name="productId"/>
                <button class="col-lg-12">Add to cart</button>
              </form>
            </div>
      `;
    })
    .reverse().join('\n');

  return layout({
    content: `
      <div class="container row all-products">
        <h2>Products</h2>
        ${renderedProducts}  
      </div>
    `,
    menu:  `
    <div class="menu row text-center col-12">
      <div class="col-lg-3 col-md-3 col-sm-3">
          <a href="/"><h3>Frontpage</h3></a>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3">
          <a href="/products"><h3>Products</h3></a>
          <svg height="5" width="5">
            <circle cx="2" cy="2" r="2" fill="black" />
          </svg>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3">
      <a href="/articles"><h3>Articles</h3></a>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3">
      <a href="/cart"><h3>Cart</h3></a>
      </div>
    </div>
    `,
    bg: 'all'

  });
};
