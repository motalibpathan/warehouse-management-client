export async function getAccessToken(email) {
  const response = await fetch(
    "https://enigmatic-harbor-04768.herokuapp.com/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );

  const data = await response.json();

  localStorage.setItem("access-token", data.accessToken);
}
