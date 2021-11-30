const layout = require('../layout');

module.exports = ({ products }) => {
    const renderedProducts = products
        .map(product => {
            return `
                <tr>
                    <td>${product.title}</td>
                    <td>${product.itemTag}</td>
                    <td>${product.price}</td>
                    <td>
                    <a href="/admin/products/${product.id}/edit">
                        <button class="edit admin-button">
                        Edit
                        </button>
                    </a>
                    </td>
                    <td>
                        <form method="POST" action="/admin/products/${product.id}/delete">
                            <button class="delete admin-button">Delete</button>
                        </form>
                    </td>
                </tr>
            `;
            })
        .join('');

        return layout({
        content: `
            <div>
                <h2>Products</h2>  
                <div>
                    <a href="/admin/products/new" class="admin-button">New Product</a>
                    <a href="/signout" class="admin-button">Sign out</a>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Tag</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                ${renderedProducts}
                </tbody>
            </table>
        `
    });
};
