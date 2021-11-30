const layout = require('../layout');

module.exports = ({ product }) => {
    return layout({
        content: `
            <div class="container row product-closeup">
                <a href="/products">
                    <div class="back">
                        <img src="/images/left-arrow.png">
                        <h6>Products</h6>
                    </div>
                </a>
                <div class="col-lg-12 row product-info">
                    <img class="img-fluid col-lg-5 col-md-12" src="data:image/png;base64, ${product.image}" alt="${product.title}">
                    <div class="col-lg-6 col-md-12 product-description">
                        <h2> ${product.title}</h2>
                        <h3> Price: ${product.price} €</h3>
                        <button>Add to cart</button>
                        <p> ${product.description}</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
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
