// --- 1. Element Selection & Casting ---
var form = document.getElementById('devForm');
var usernameInput = document.getElementById('username');
// Note: Casting as HTMLSelectElement gives us access to .selectedIndex and .options
var roleSelect = document.getElementById('role');
var roleFeedback = document.getElementById('role-feedback');
// Note: Checkboxes are still HTMLInputElement, but we care about .checked
var termsCheckbox = document.getElementById('terms');
// --- 2. Helper Functions ---
var toggleError = function (elementId, show) {
    var errorEl = document.getElementById(elementId);
    if (errorEl)
        errorEl.style.display = show ? 'block' : 'none';
};
// --- 3. Event Handling: 'change' vs 'input' ---
// Handle Select Change (Logic specific to dropdowns)
roleSelect.addEventListener('change', function (e) {
    // We can cast the target within the event handler
    var target = e.target;
    if (target.value !== "") {
        roleFeedback.textContent = "Great choice! We need more ".concat(target.value, " devs.");
        roleFeedback.style.display = 'block';
        target.classList.remove('border-red-500'); // Remove error style
    }
    else {
        roleFeedback.style.display = 'none';
    }
});
// --- 4. Main Validation Logic ---
var validateForm = function () {
    var isValid = true;
    // Username Validation
    if (usernameInput.value.trim() === '') {
        toggleError('error-username', true);
        usernameInput.classList.add('input-error');
        isValid = false;
    }
    else {
        toggleError('error-username', false);
        usernameInput.classList.remove('input-error');
    }
    // Role (Select) Validation
    // We check if the value is empty string (the value of our first option)
    if (roleSelect.value === "") {
        toggleError('error-role', true);
        isValid = false;
    }
    else {
        toggleError('error-role', false);
    }
    // Terms (Checkbox) Validation
    // Here we check the boolean property .checked
    if (!termsCheckbox.checked) {
        toggleError('error-terms', true);
        isValid = false;
    }
    else {
        toggleError('error-terms', false);
    }
    return isValid;
};
// --- 5. Submit Handler ---
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
        // Example of gathering data safely
        var formData = {
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
