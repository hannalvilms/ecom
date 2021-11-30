const layout = require('../layout');

module.exports = ({ article }) => {
    return layout({
        content: `
            <div class="container row article-closeup">
                    <a href="/articles">
                        <div class="back">
                            <img src="/images/left-arrow.png">
                            <h6>Articles</h6>
                        </div>
                    </a>
                    <div class="col-12 article-closeup-content">
                        <h2> ${article.title}</h2>
                        <img class="img-fluid col-lg-12 col-md-12" src="data:image/png;base64, ${article.image}" alt="${article.title}">
                        <div class="col-lg-12 col-md-12">
                            <p> ${article.content}</p>
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
