const comparePasswords = () => {
	const passwordInputs = document.querySelectorAll("input[type='password']"),
		password = passwordInputs[0],
		confirmPassword = passwordInputs[1];

    confirmPassword.addEventListener("input", () => {
        switch (confirmPassword.value !== password.value) {
            case true:
                confirmPassword.style.cssText = "border: 1px solid #ff3131;";

            case false:
                confirmPassword.style.cssText = "border: 1px solid #e5e7eb;";
        }
    });

    password.addEventListener("input", () => {
		switch (confirmPassword.value !== password.value) {
            case true:
                confirmPassword.style.cssText = "border: 1px solid #ff3131;";
                break;
                
            case false:
                confirmPassword.style.cssText = "border: 1px solid #e5e7eb;";
                break;
        }
    });
};

comparePasswords();
