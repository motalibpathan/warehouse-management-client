export async function getAccessToken(email) {
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  localStorage.setItem("access-token", data.accessToken);
}
