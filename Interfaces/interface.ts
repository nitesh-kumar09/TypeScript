/**
 * Transaction Interface
 * ---------------------
 * This interface defines the structure of a single transaction.
 *
 * Purpose:
 * - To describe how money moves between two bank accounts.
 * - Acts as a rule so every transaction object follows the same shape.
 *
 * Why interface:
 * - Prevents inconsistent transaction data.
 * - Makes code predictable and type-safe.
 */
interface Transaction {
    payerAccountNumber: number; // Account number of the sender
    payeeAccountNumber: number; // Account number of the receiver
}

/**
 * First transaction example
 * -------------------------
 * This object follows the Transaction interface.
 * TypeScript ensures both required fields are present.
 */
const transaction1: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456,
};

/**
 * Second transaction example
 * --------------------------
 * Reusing the same Transaction interface for another transaction.
 * Shows how one interface can be used multiple times.
 */
const transaction2: Transaction = {
    payerAccountNumber: 789,
    payeeAccountNumber: 111,
};

/**
 * BankAccount Interface
 * --------------------
 * Represents a real-world bank account.
 *
 * Why this interface exists:
 * - Groups all account-related information in one place.
 * - Maintains a relationship between a bank account and its transactions.
 *
 * Key idea:
 * - One BankAccount can have MANY transactions.
 * - Hence, `Transaction[]` (array of transactions).
 */
interface BankAccount {
    accountNumber: number;        // Unique identifier for the bank account
    accountHolderName: string;    // Name of the account owner
    balance: number;              // Current balance in the account
    isActive: boolean;            // Indicates whether the account is active
    transaction: Transaction[];   // List of transactions linked to this account
}

/**
 * BankAccount object example
 * -------------------------
 * Demonstrates how interfaces work together.
 *
 * Flow:
 * - BankAccount uses Transaction[]
 * - Each transaction inside the array must follow Transaction rules
 *
 * Benefit:
 * - Clear structure
 * - No accidental missing or wrong data
 */
const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolderName: "Nitesh Singh",
    balance: 4000,
    isActive: true,
    transaction: [transaction1, transaction2],
};
