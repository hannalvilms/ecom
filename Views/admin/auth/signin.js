const layout = require('../layout');
const {getError} = require('../../helpers');

module.exports = ({errors}) => {
    return layout({
        content: `
        <div class="signing container-fluid">
          <div class="col-lg-12 row">
            <form method="POST">
              <h2 class="title">Sign in</h2>
              <div class="field">
                <input required name="email" placeholder="E-mail"/>
                <p class="err">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <input required name="password" placeholder="Password" type="password" />
                <p class="err">${getError(errors, 'password')}</p>
              </div>
              <button>Submit</button>
            </form>
            <a href="/signup">Need an account? Sign Up</a>
          </div>
          </div>
        `
    });
};