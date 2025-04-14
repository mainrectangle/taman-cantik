export function showLogin(main) {
  main.innerHTML = `
      <h2>Login</h2>
      <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
      </form>
      <p id="errorMessage" style="color: red; display: none;">Invalid credentials. Try again.</p>
    `;

  // Handle the form submission
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", handleLogin);
}

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Dummy authentication (hardcoded credentials)
  if (username === "asa" && password === "asa") {
    // On success, navigate to the Home page
    window.location.hash = "#home";
  } else {
    // Show error message
    document.getElementById("errorMessage").style.display = "block";
  }
}
