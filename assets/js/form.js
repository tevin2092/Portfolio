function validation() {
    const email = document.registration.email.value
    const first_name = document.registration.first_name.value
    const last_name = document.registration.last_name.value
    const gender = document.registration.gender.value
    const country =document.registration.country.value 
    
    if (email.endsWith( '@dci-student.org') == false ) {
        alert('Email should end with @dci-student.org')
        return false
    }

    if (first_name.length < 8) {
        alert( 'First name should be at least 8 characters long')
        return false
    }

    if (last_name.length < 1) {
        alert ('Last name should be at least 1 character')
        return false
    }
    if (country == 'usa' && gender != 'female') {
        alert('We only register females in USA')
        return false
    }
}
