const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ errors }) => {
    return layout({
        content: `
            <div class="row new-product">
                <h2>Create an Article</h2>
                <form class="col-12" method="POST" enctype="multipart/form-data">
                    <div>
                        <input class="col-lg-9 col-12" placeholder="Title" name="title">
                        <p class="err">${getError(errors, "title")}</p>
                    </div>
                    <div>
                        <textarea class="col-lg-9 col-12" placeholder="Content" name="content"></textarea>
                    </div>
                    <div>          
                        <input class="file-input" type="file" name="image" />
                    </div>
                    <br />
                    <button class="admin-button">Create</button>
                </form>
            </div>
        `,
    });
};
