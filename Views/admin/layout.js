module.exports = ({ content }) => {
return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <title>Shop</title>
        <link href="/styles/style.css" rel="stylesheet">
      </head>

      <body class="admin">
          <div class="container-fluid">
              <header>
                    <nav class="navbar navbar-bottom">
                      <div class="container navbar-container">
                        <div>
                          <a href="/admin/products">
                            <h3>Admin Panel</h3>
                          </a>
                        </div>
                        <div class="navbar-item">
                          <div class="navbar-buttons">
                            <div class="navbar-item">
                              <a href="/admin/products">Products</a>
                            </div>
                            <div class="navbar-item">
                              <a href="/admin/articles">Articles</a>
                            </div>
                            <div class="navbar-item">
                              <a href="/">Frontpage</a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </nav>
              </header>
              <div class="container">
                ${content}
              </div>
          </div>
      </body>
    </html>
  `;
};
