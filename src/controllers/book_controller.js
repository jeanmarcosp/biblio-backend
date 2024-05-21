import Book from "../models/book_model";

export async function addBook(bookFields) {
  const post = new Book(postFields);
  try {
    const savedPost = await post.save();
    return savedPost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
}

export async function deleteBook() {

}

export async function getBooks(id) {

}

export async function deletePost(id) {

}

// Update post function (modified to handle comments)
export async function updateBook(id, postFields) {

}
