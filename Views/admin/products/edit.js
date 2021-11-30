const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ product, errors }) => {
    return layout({
        content: `
            <div class="row edit-product">
                <h2 class="subtitle">Edit a Product</h2>
                <formclass="col-12"  method="POST" enctype="multipart/form-data">
                    <div>
                        <input value="${product.title}" class="col-lg-9 col-12" placeholder="Title" name="title">
                        <p class="err">${getError(errors, 'title')}</p>
                    </div>
                    <div>
                        <textarea class="col-lg-9 col-12" placeholder="Description" name="description">${product.description}</textarea
                        <p class="err">${getError(errors, 'description')}</p>
                    </div>
                    <div>
                        <input value="${product.itemTag}" class="col-lg-9 col-12" placeholder="Tag" name="itemTag">
                        <p class="err">${getError(errors, 'itemTag')}</p>
                    </div>
                    <div>
                        <input value="${product.price}" class="col-lg-9 col-12" placeholder="Price" name="price">
                        <p class="err">${getError(errors, 'price')}</p>
                    </div>
                    <div>          
                        <input class="file-input" type="file" name="image" />
                    </div>
                    <br />
                    <button class="admin-button">Edit</button>
                </form>
            </div>
        `
    });
};
