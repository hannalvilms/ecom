const layout = require('../layout');
const {getError} = require('../../helpers');

module.exports = ({ req, errors }) => {
  return layout({
    content: `
    <div class="signing col-lg-12 row">
        <form method="POST">
          <h2>Sign Up</h2>
          <div class="field">
            <input required name="email" placeholder="E-mail"/>
            <p class="err">${getError(errors, 'email')}</p>
          </div>
          <div class="field">
            <input required name="password" placeholder="Password" type="password" />
            <p class="err">${getError(errors, 'password')}</p>
          </div>
          <div class="field">
            <input required name="passwordConfirmation" placeholder="Passworn confirmation" type="password" />
            <p class="err">${getError(
              errors,
              'passwordConfirmation'
            )}</p>
          </div>
          <button>Submit</button>
        </form>
        <a href="/signin">Have an account? Sign In</a>
    </div>
  `
  });
};
