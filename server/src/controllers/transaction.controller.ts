import { Request, Response } from "express";
import mockTransactions from "../models/mockTransactions";
import mockUser from "../models/mockUser";

<<<<<<< HEAD
// Get all transactions of the user
async function getAllUser(req: Request, res: Response) {
=======
// Get all transactions from the db
function getAll(req: Request, res: Response) {
  try {
    const transactions = mockTransactions;
    res.status(200).send(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not get the list of transactions.");
  }
}

// Get all transactions of the user
function getAllUser(req: Request, res: Response) {
>>>>>>> main
  try {
    const { userId } = req.body;
    const userTransactions = mockTransactions.filter(
      (transaction) => transaction.userId === userId
    );
    res.status(200).send(userTransactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not get the list of transactions.");
  }
}

// Get all transactions of the couple (user and the partner)
<<<<<<< HEAD
async function getAllCouple(req: Request, res: Response) {
  try {
    // const { userId } = req.body;
    const userId: string = req.body.id;
=======
function getAllCouple(req: Request, res: Response) {
  try {
    const { userId } = req.body;
>>>>>>> main
    // Get id of the partner account linked to the user
    const partnerId = mockUser.find(
      (user) => user.userId === userId
    )?.linkedUserId;
    // Get user transactions
    const userTransactions = mockTransactions.filter(
      (transaction) => transaction.userId === userId
    );
    // Get partner transactions
    const partnerTransactions = mockTransactions.filter(
      (transaction) => transaction.userId === partnerId
    );
    // Combine transactions into couple's transaction
    const coupleTransactions = userTransactions.concat(partnerTransactions);
    res.status(200).send(coupleTransactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not get the list of transactions.");
  }
}

// Add a transaction to the db
<<<<<<< HEAD
async function addTransaction(req: Request, res: Response) {
=======
function addTransaction(req: Request, res: Response) {
>>>>>>> main
  try {
    const transaction = req.body;
    mockTransactions.push(transaction);
    res.status(201).send(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not add the transaction.");
  }
}

// Delete a transaction from the db
<<<<<<< HEAD
async function deleteTransaction(req: Request, res: Response) {
=======
function deleteTransaction(req: Request, res: Response) {
>>>>>>> main
  try {
    const { id } = req.params;
    const transaction = mockTransactions.find(
      (transaction) => transaction.transactionId === id.toString()
    );
    const transactionIndex = mockTransactions.findIndex(
      (transaction) => transaction.transactionId === id
    );
    mockTransactions.splice(transactionIndex, 1);
    res.status(200).send(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not delete the transaction.");
  }
}

const transactionController = {
<<<<<<< HEAD
=======
  getAll,
>>>>>>> main
  getAllUser,
  getAllCouple,
  addTransaction,
  deleteTransaction,
};

export default transactionController;
