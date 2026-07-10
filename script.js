document.getElementById("showPass").addEventListener("change", function () {
    const passwordField = document.getElementById("password");

    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

document.getElementById("haileyab126@gmail.com").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Login button clicked.");
});