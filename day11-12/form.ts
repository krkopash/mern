
        // --- 1. Element Selection & Casting ---
        const form = document.getElementById('devForm') as HTMLFormElement;
        const usernameInput = document.getElementById('username') as HTMLInputElement;
        
        // Note: Casting as HTMLSelectElement gives us access to .selectedIndex and .options
        const roleSelect = document.getElementById('role') as HTMLSelectElement; 
        const roleFeedback = document.getElementById('role-feedback') as HTMLParagraphElement;

        // Note: Checkboxes are still HTMLInputElement, but we care about .checked
        const termsCheckbox = document.getElementById('terms') as HTMLInputElement;

        // --- 2. Helper Functions ---
        const toggleError = (elementId: string, show: boolean) => {
            const errorEl = document.getElementById(elementId);
            if(errorEl) errorEl.style.display = show ? 'block' : 'none';
        };

        // --- 3. Event Handling: 'change' vs 'input' ---
        
        // Handle Select Change (Logic specific to dropdowns)
        roleSelect.addEventListener('change', (e: Event) => {
            // We can cast the target within the event handler
            const target = e.target as HTMLSelectElement;
            
            if (target.value !== "") {
                roleFeedback.textContent = `Great choice! We need more ${target.value} devs.`;
                roleFeedback.style.display = 'block';
                target.classList.remove('border-red-500'); // Remove error style
            } else {
                roleFeedback.style.display = 'none';
            }
        });

        // --- 4. Main Validation Logic ---
        const validateForm = (): boolean => {
            let isValid = true;

            // Username Validation
            if (usernameInput.value.trim() === '') {
                toggleError('error-username', true);
                usernameInput.classList.add('input-error');
                isValid = false;
            } else {
                toggleError('error-username', false);
                usernameInput.classList.remove('input-error');
            }

            // Role (Select) Validation
            // We check if the value is empty string (the value of our first option)
            if (roleSelect.value === "") {
                toggleError('error-role', true);
                isValid = false;
            } else {
                toggleError('error-role', false);
            }

            // Terms (Checkbox) Validation
            // Here we check the boolean property .checked
            if (!termsCheckbox.checked) {
                toggleError('error-terms', true);
                isValid = false;
            } else {
                toggleError('error-terms', false);
            }

            return isValid;
        };

        // --- 5. Submit Handler ---
        form.addEventListener('submit', (e: SubmitEvent) => {
            e.preventDefault();

            if (validateForm()) {
                // Example of gathering data safely
                const formData = {
                    username: usernameInput.value,
                    role: roleSelect.value,
                    agreedToTerms: termsCheckbox.checked
                };
                
                console.log("Form Data Submitted:", formData);
                alert("Profile Saved!");
                form.reset();
                roleFeedback.style.display = 'none'; // Reset UI specific to Select
            }
        });
    