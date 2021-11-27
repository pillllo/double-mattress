const fs = require('fs');
const path = require('path');

const { v1: uuidv1 } = require('uuid');

const FS_OPTS = { encoding:'utf-8' };
const OUTPUT_PATH = './output/mock-data.json';

// data shapes

const CATEGORIES = {
  income: 'Income',
  rent: 'Rent',
  bills: 'Bills and Services',
  shopping: 'Shopping',
  entertainment: 'Entertainment',
  eatingOut: 'Eating Out',
  others: 'Others',
};

const output = {};

// create [User]

function createUser (name, currency = 'EUR') {
  return {
    userId: uuidv1(),
    firstName: name,
    currency: currency,
    linkedUserIds: []
  };
}

function createCategories (categories) {
  return Object.values(categories);
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

const user1 = createUser('Annie');
const user2 = createUser('Ben');
user1.linkedUserIds.push(user2.userId);
user2.linkedUserIds.push(user1.userId);
output.users = [user1, user2];

// create categories
output.categories = createCategories(CATEGORIES);

// create [Transaction] for both user1 and user2
output.users.forEach(user => {

});

// outputs file to /output
console.log(__dirname);
const writePath = path.join([__dirname, OUTPUT_PATH]);
if (!fs.stat(writePath)) {

}
// fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output), FS_OPTS);
