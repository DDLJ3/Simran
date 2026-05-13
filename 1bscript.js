document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    // Store in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("Registration successful!");

            // Redirect to display page
            window.location.href = "display.html";
        }
    };

    xhr.send(JSON.stringify(user));
});