const BASE_URL = 'https://double-mattress.herokuapp.com';
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2Rld29ya3Mtc2VuaW9yIiwibmFtZSI6ImRvdWJsZS1tYXR0cmVzcy1zZXJ2ZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.V-deQaQW6rBJjQBVzWW7B1_jPenmrtUWXGxKT1CCUyY"
function fetchRequest(path:any, options:any) {
    return fetch(BASE_URL + path, options).then(res => res.status < 400 ? res : Promise.reject())
        .then(res => res.status !== 204 ? res.json() : res)
        .catch(err => {
            console.log("Error:", err)
        })
}

// Request:
// {
//   userId: string,("1")
//   date: string,("Mon Aug 01 2022 18:14:45 GMT+0200 (Central European Summer Time)")
// }
function getDashboard(body:any) {
  return fetchRequest("/dashboard", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Client-Jwt": token
      },
      body: JSON.stringify(body)
  });
}
// RESPONSE
// {
//   transactions: [], // unfiltered / unsorted transactions for all users
//   categoryTotals: {
//     home: {
//       USER_A_ID: 456,
//       USER_B_ID: 457,
//     },
//     shopping: 4567,
//     ...
//   },
//   typeTotals: {
//     income: {
//       USER_A_ID: 98456798,
//       USER_B_ID: 93485798,
//     },
//     expenses: {
//      USER_A_ID: 456,
//      USER_B_ID: 457,
//     },
//   savings: {
//      combined for all linked users
//     currentMonth: 45774,
//     monthlyAverageSinceJoining: 947698,
//     totalSinceJoining: 456987798,
//   }
// }




//Request
  // {
  //   userId: string,("1")
  //   date: string,("Mon Aug 01 2022 18:14:45 GMT+0200 (Central European Summer Time)")
  // }

function getProjections(body:any) {
  return fetchRequest("/projections", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          // "Client-Jwt": token
      },
      body: JSON.stringify(body)
  });
}

// RESPONSE
// {
// 0: {
//   savings: {
//     totalSinceJoining: 456987798,
//     monthlyAverage3Months: 947698
//   },
//   typeAverages: {
//      income: number,
//      expenses: number
//   },
//   categoryAverages: {
//      home: number
//      expenses: number
//   },
//   month: string (first day of month time 0000),
//   projectedChanges: [] (array of “transaction” like objects which each represent a projected “transaction”)
//    },
// 1: { ....
// }, ....
// 11: {
// }


function addProjection(body:any) {
  return fetchRequest("/projections/create", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Client-Jwt":token
      },
      body: JSON.stringify(body)
  });
}
// RESPONSE
// {
// 0: {
//   savings: {
//     totalSinceJoining: 456987798,
//     monthlyAverage3Months: 947698
//   },
//   typeAverages: {
//      income: number,
//      expenses: number
//   },
//   categoryAverages: {
//      home: number
//      expenses: number
//   },
//   month: string (first day of month time 0000),
//   projectedChanges: [] (array of “transaction” like objects which each represent a projected “transaction”)
//    },
// 1: { ....
// }, ....
// 11: {
// }




const ApiService = {
  getDashboard,getProjections,addProjection
}


export default ApiService;