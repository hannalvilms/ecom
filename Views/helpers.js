module.exports = {
    getError(errors, property) {
        //property === 'email' || 'password' || 'passwordConfirmation'
        //errors.mapped() gives back an object
        //property.msg gives us messange in the object
        try {
            return errors.mapped()[property].msg;
        } catch (err) {
            return '';
        }
    }
}