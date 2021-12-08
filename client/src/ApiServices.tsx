const BASE_URL = "https://double-mattress.herokuapp.com";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2Rld29ya3Mtc2VuaW9yIiwibmFtZSI6ImRvdWJsZS1tYXR0cmVzcy1zZXJ2ZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.V-deQaQW6rBJjQBVzWW7B1_jPenmrtUWXGxKT1CCUyY";
function fetchRequest(path: any, options: any) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.log("Error:", err);
    });
}

function getDashboard(body: any) {
  return fetchRequest("/dashboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

function getProjections(body: any) {
  return fetchRequest("/projections", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

function createCheckoutStripe(body: any) {
  return fetchRequest("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

function addProjection(body: any) {
  return fetchRequest("/projections/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

function deleteProjection(body: any) {
  return fetchRequest("/projections", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}
function loginUser(body: any) {
  return fetchRequest("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

function searchPartner(body: any) {
  return fetchRequest("/connect/initiate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

function sendConnection(body: any) {
  return fetchRequest("/connect/confirm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}
function confirmConnection(body: any) {
  return fetchRequest("/connect/complete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

function sendSubSessionId(body: any) {
  return fetchRequest("/add-customer-id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Jwt": token,
    },
    body: JSON.stringify(body),
  });
}

const ApiService = {
  getDashboard,
  getProjections,
  addProjection,
  deleteProjection,
  loginUser,
  sendConnection,
  searchPartner,
  createCheckoutStripe,
  sendSubSessionId,
  confirmConnection
};

export default ApiService;
