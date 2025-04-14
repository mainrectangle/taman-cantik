export function showHome(main) {
  main.innerHTML = `
      <h2>Home</h2>
      <p>Welcome, user! You are logged in.</p>
      <button onclick="location.hash = '#login'">Logout</button>
    `;
}
