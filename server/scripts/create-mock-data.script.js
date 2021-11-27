const fs = require("fs");
const path = require("path");
const { v1: uuid } = require("uuid");

const FS_OPTS = { encoding: "utf-8" };
const OUTPUT_PATH = path.join(__dirname, "output");
const OUTPUT_FILENAME = "mock-data.json";

const CATEGORIES = {
  income: "Income",
  rent: "Rent",
  bills: "Bills and Services",
  shopping: "Shopping",
  entertainment: "Entertainment",
  eatingOut: "Eating Out",
  others: "Others",
};

const output = {};

// create [User]

function createUser(name, currency = "EUR") {
  const user = {
    userId: uuid(),
    firstName: name,
    currency,
    linkedUserIds: [],
  };
  return user;
}

function createCategories() {
  return Object.values(CATEGORIES);
}

// function createTransaction () {
//   return {
//     transactionId: uuidv1(),
//     transactionType: 'income' | 'expense',
//     userId: GUID,
//     otherUserIds: [ GUID ],
//     amount: integer,
//     currency: string (e.g. 'EUR')
//     category: string (category | salary),
//     date: Date (ISO String),
//     description: ‘string’ (e.g. 'Trip to Mexico') ,
//     includeAvg: boolean,
//   };
// }

// create users

const user1 = createUser("Annie");
const user2 = createUser("Ben");
user1.linkedUserIds.push(user2.userId);
user2.linkedUserIds.push(user1.userId);
output.users = [user1, user2];

// create categories
output.categories = createCategories();

// create [Transaction] for both user1 and user2
output.users.forEach((user) => {});

// outputs file to /output
fs.access(OUTPUT_PATH, (err) => {
  if (err && err.code === "ENOENT") fs.mkdirSync(OUTPUT_PATH);
  // 3rd argument to JSON.stringify puts in whitespace (pretty output)
  fs.writeFileSync(
    `${OUTPUT_PATH}/${OUTPUT_FILENAME}`,
    JSON.stringify(output, null, 2)
  );
});
