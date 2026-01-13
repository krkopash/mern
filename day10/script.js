const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const useridError = document.getElementById('useridError');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            
            // Reset messages
            emailError.textContent = '';
            passwordError.textContent = '';
            
            let isFormValid = true;

            if(userid.value.length>15){
                useridError.textContent = 'User id contains must be maximum 15 characters';
            }

            // 1. Email Validation (Regex check)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                isFormValid = false;
            }

            // 2. Password Validation (Length check)
            if (passwordInput.value.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters long.';
                isFormValid = false;
            }

            // Final Action
            if (isFormValid) {
                alert('Success! Form is valid according to TypeScript logic.');
                console.log('User Login:', {
                    email: emailInput.value,
                    password: passwordInput.value
                });
            }
        });