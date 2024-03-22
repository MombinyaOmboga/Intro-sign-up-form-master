document
        .getElementById('signup-form')
        .addEventListener('submit', function (event) {
          event.preventDefault() // prevent form from submitting normally

          //reset error messages
          document.getElementById('fname-error').textContent = ''
          document.getElementById('firstname').classList.remove('invalid')
          document.getElementById('lname-error').textContent = ''
          document.getElementById('lastname').classList.remove('invalid')
          document.getElementById('email-error').textContent = ''
          document.getElementById('email').classList.remove('invalid')
          document.getElementById('password-error').textContent = ''
          document.getElementById('password').classList.remove('invalid')

          //fetch form inputs
          var firstName = document.getElementById('firstname').value
          var lastName = document.getElementById('lastname').value
          var email = document.getElementById('email').value
          var password = document.getElementById('password').value

          //Form Validation
          if (firstName.trim() === '') {
            document.getElementById('fname-error').textContent =
              'Provide first name!'
            document.getElementById('firstname').classList.add('invalid')
            return
          }
          if (lastName.trim() === '') {
            document.getElementById('lname-error').textContent =
              'Provide second name!'

            document.getElementById('lastname').classList.add('invalid')
            return
          }

          if (email.trim() === '') {
            document.getElementById('email-error').textContent =
              'Enter your email'
            document.getElementById('email').classList.add('invalid')
            return
          } else if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent =
              'Enter a valid email!'

            return
          }

          if (password.trim() === '') {
            document.getElementById('password-error').textContent =
              'Enter password!'
            document.getElementById('password').classList.add('invalid')
            return
          } else if (password.length < 8) {
            document.getElementById('password-error').textContent =
              'Password too short!'
            document.getElementById('password').classList.add('invalid')
            return
          }else if(!isValidPassword(password)){
            document.getElementById('password-error').textContent = 'Password weak!'
            return
          }
        })

      //Check email nad password validity
      function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
      }

      function isValidPassword(password){
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        return passwordRegex.test(password)
      }
