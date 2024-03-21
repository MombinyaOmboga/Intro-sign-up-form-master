document
        .getElementById('signup-form')
        .addEventListener('submit', function (event) {
          event.preventDefault() // prevent form from submitting normally

          //reset error messages
          document.getElementById('fname-error').textContent = ''
          document.getElementById('lname-error').textContent = ''
          document.getElementById('email-error').textContent = ''
          document.getElementById('password-error').textContent = ''

          //fetch form inputs
          var firstName = document.getElementById('firstname').value
          var lastName = document.getElementById('lastname').value
          var email = document.getElementById('email').value
          var password = document.getElementById('password').value

          //Form Validation
          if (firstName.trim() === '') {
            document.getElementById('fname-error').textContent =
              'First Name cannot be empty'
            console.log(document.getElementById('fname-error'))
            return
          }
          if (lastName.trim() === '') {
            document.getElementById('lname-error').textContent =
              'Last name cannot be empty'
            return
          }

          if (email.trim() === '') {
            document.getElementById('email-error').textContent =
              'Enter your email'
            return
          } else if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent =
              'Enter a valid email!'
            return
          }

          if (password.trim() === '') {
            document.getElementById('password-error').textContent =
              'Enter your password'
            return
          } else if (password.length < 8) {
            document.getElementById('password-error').textContent =
              'Password too short!'
            return
          }

          // this.onsubmit(); // No need for this line, as it's redundant
        })

      //Check email validity
      function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
      }
