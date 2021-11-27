import { Request, Response } from "express";

export function getAll(req: Request, res: Response) {
  try {
    const transactions = {};
    res.status(200).send(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not get the list of transactions.");
  }
}

export function addTransaction(req: Request, res: Response) {
  try {
    const transaction = {};
    res.status(200).send(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not add the transaction.");
  }
}

export function editTransaction(req: Request, res: Response) {
  try {
    const {} = req.params;
    const transaction = {};
    res.status(200).send(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not edit the transaction.");
  }
}

export function deleteTransaction(req: Request, res: Response) {
  try {
    const transaction = {};
    res.status(200).send(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).send("Could not delete the transaction.");
  }
}

const transactionController = {
  getAll,
  addTransaction,
  editTransaction,
  deleteTransaction,
};

export default transactionController;
