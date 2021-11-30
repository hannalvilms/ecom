const layout = require('../layout');

module.exports = ({ items }) => {

    const totalPrice = items.reduce((prev, item) => {
        return prev + item.quantity * item.product.price;
    }, 0);

    const renderedItems = items
        .map(item => {
        return `
            <div class="cart-item message row">
                <div class="col-12 title">
                    <img class="img-fluid col-lg-2 col-md-2 col-sm-12 col-xs-12" src="data:image/png;base64, ${item.product.image}" alt="${item.product.title}">
                    <h3 class="col-lg-6  col-md-6 col-sm-12 col-xs-12">${item.product.title}</h3>
                    <div class="col-lg-2">
                        $${item.product.price}  x  ${item.quantity}
                    </div>
                    <div class="price col-lg-1">
                        $${item.product.price * item.quantity}
                    </div>
                    <div>
                        <form class="col-lg-1" method="POST" action="/cart/products/delete">
                            <input hidden value="${item.id}" name="itemId"/>   
                            <button>        
                                <span class="icon is-small">
                                    <i class="fas fa-times"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        })
        .join('');

    return layout({
        content: `
        <div class="container entire-cart row">
            <h2 class="col-lg-12">Shopping Cart</h2>
            <div class="col-lg-12">
                ${renderedItems}
                <div class="total">
                    <h3>Total:</h3>
                    <h3 class="title">$${totalPrice}</h3>
                    <button>Buy</button>
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
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
                    <a href="/articles"><h3>Articles</h3></a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
                    <a href="/cart"><h3>Cart</h3></a>
                    <svg height="5" width="5">
                    <circle cx="2" cy="2" r="2" fill="black" />
                    </svg>
                </div>
            </div>
        `,
        bg: 'all'
    });
};
