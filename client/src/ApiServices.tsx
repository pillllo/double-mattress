const BASE_URL = "https://double-mattress.herokuapp.com";

function fetchRequest(path: any, options: any) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.log("Error:", err);
    });
}

// {
//   userId: string;
// }
function getTransactions(body: any) {
  return fetchRequest("/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-JWT":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2Rld29ya3Mtc2VuaW9yIiwibmFtZSI6ImRvdWJsZS1tYXR0cmVzcy1zZXJ2ZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.V-deQaQW6rBJjQBVzWW7B1_jPenmrtUWXGxKT1CCUyY",
    },

    body: JSON.stringify(body),
  });
}

const ApiService = {
  getTransactions,
};

export default ApiService;
