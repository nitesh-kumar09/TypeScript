/**
 * Base interface representing a generic Book.
 * ------------------------------------------------
 * This interface contains properties that are
 * common to ALL types of books (physical or digital).
 *
 * Purpose:
 * - Acts as the foundation for more specialized book types.
 * - Helps avoid repetition of common fields.
 */
interface Book {
    name: string;   // Title of the book
    price: number;  // Price of the book
}

/**
 * Represents an electronic version of a book.
 * --------------------------------------------
 * Inherits all common book properties from `Book`
 * and adds digital-specific information.
 *
 * Why extend Book?
 * - Ebook IS a Book, but with extra features.
 * - Reuses base fields instead of redefining them.
 */
interface Ebook extends Book {
    fileSize: number; // Size of the ebook file (in MB)
    format: string;   // File format (pdf, epub, etc.)
}

/**
 * Represents an audio version of an ebook.
 * ----------------------------------------
 * Extends `Ebook` to add audio-specific data.
 *
 * This demonstrates multi-level inheritance:
 * Book → Ebook → AudioBook
 */
interface AudioBook extends Ebook {
    duration: number; // Total audio length (in hours)
}

/**
 * Example AudioBook object.
 * ------------------------
 * TypeScript enforces that ALL required properties
 * from the inheritance chain are provided.
 */
const book: AudioBook = {
    name: "Atomic Habbit",
    price: 199,
    fileSize: 400,
    format: "pdf",
    duration: 4,
};

/**
 * Represents a video version of a book.
 * ------------------------------------
 * Extends `AudioBook` to include video-specific details.
 *
 * This shows how the model can be scaled without
 * modifying existing interfaces.
 */
interface VideoBook extends AudioBook {
    resolution: number; // Video resolution (e.g. 720, 1080)
}

/**
 * Example VideoBook object.
 * ------------------------
 * Inherits properties from:
 * Book → Ebook → AudioBook → VideoBook
 *
 * This structure keeps the code clean, scalable,
 * and easy to understand for future contributors.
 */
const vBook: VideoBook = {
    name: "Atomic Habbit",
    price: 199,
    fileSize: 400,
    format: "pdf",
    duration: 4,
    resolution: 1080,
};
