function validate() {
    const email = document.forms[0].email.value;
    const password = document.forms[0].password.value;
// check 'condition_for_email' and 'condition_for_password'
    if (email.endsWith('@digitalcareerinstitute.org') && password.length >= 8) {
        return true;
     } else {
        alert("email or password doesn't meet requirements");
    return false;
    }
  }

 
