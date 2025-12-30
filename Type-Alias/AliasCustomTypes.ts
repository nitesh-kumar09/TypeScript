/**
 * Type Alias Definitions
 * ----------------------
 * Type aliases are used to give a meaningful name
 * to a primitive or complex type.
 *
 * Purpose:
 * - Improves readability
 * - Makes code more expressive
 * - Helps maintain consistency across the project
 */

// A custom type alias for numeric IDs
// Useful when IDs are used in many places
type ID = number;

// Using the ID type alias
// Makes it clear that this number represents a user ID
const userId: ID = 123;

/**
 * Type alias for fruits
 * --------------------
 * Even though it is a string, naming it gives semantic meaning.
 * This helps future readers understand the intent.
 */
type Fruit = string;

// Using the Fruit type alias
const apple: Fruit = "Apple";

/**
 * User Type Definition
 * --------------------
 * Describes the structure of a User object.
 *
 * Notes:
 * - `address` is optional (marked with ?)
 * - Optional fields may or may not be present
 *
 * Why optional?
 * - Not every user may have an address
 * - Prevents forcing unnecessary data
 */
type User = {
    name: string;       // User's full name
    age: number;        // User's age
    address?: string;   // Optional address field
};

/**
 * User object example
 * -------------------
 * Follows the User type definition.
 * Address is optional, so it can be omitted safely.
 */
const user: User = {
    name: "Nitesh Singh",
    age: 24,
};

/**
 * Login function
 * --------------
 * Accepts a User object and returns a User object.
 *
 * Why type the function?
 * - Ensures correct data is passed in
 * - Ensures correct data is returned
 * - Prevents accidental misuse of the function
 */
function login(userData: User): User {
    return userData;
}

// Function usage example
// TypeScript enforces that the object matches User type
console.log(
    login({
        name: "Satish Singh",
        age: 20,
    })
);
