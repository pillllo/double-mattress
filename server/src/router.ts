import { Router } from "express";
import transactionController from "./controllers/transaction.controller";

const router = Router();

// Get all transaction associated with a user and their partner
router.get("/transactions", transactionController.getAll);

// Add a transaction
router.post("/transactions", transactionController.addTransaction);

// Edit a transaction
router.put("/transactions/:id", transactionController.editTransaction);

// Remove a transaction
router.delete("/transactions/:id", transactionController.deleteTransaction);

export default router;
