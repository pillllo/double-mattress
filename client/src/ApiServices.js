const BASE_URL = 'http://localhost:3001';
function fetchRequest(path, options) {
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
function getDashboard(body) {
  return fetchRequest("/dashboard", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
          // "Client-Jwt":
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

function getProjections(body) {
  return fetchRequest("/projections", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
          // "Client-Jwt":
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


function addProjections(body) {
  return fetchRequest("/projections", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
          // "Client-Jwt":
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
  getDashboard,getProjections,addProjections
}


export default ApiService;