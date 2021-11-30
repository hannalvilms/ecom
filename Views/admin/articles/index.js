const layout = require('../layout');

module.exports = ({ articles }) => {
    const renderedArticles = articles
        .map(article => {
            return `
                <tr>
                    <td>${article.title}</td>
                    <td>
                    <a href="/admin/articles/${article.id}/edit">
                        <button class="edit admin-button">
                        Edit
                        </button>
                    </a>
                    </td>
                    <td>
                        <form method="POST" action="/admin/articles/${article.id}/delete">
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
                <h2>Articles</h2>  
                <div>
                    <a href="/admin/articles/new" class="admin-button">New Article</a>
                    <a href="/signout" class="admin-button">Sign out</a>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                ${renderedArticles}
                </tbody>
            </table>
        `
    });
};
