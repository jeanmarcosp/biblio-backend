import Post from "../models/post_model";

export async function createPost(postFields) {
  const post = new Post(postFields);
  try {
    const savedPost = await post.save();
    return savedPost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
}

export async function getPosts() {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
}

export async function getPost(id) {
  try {
    const post = await Post.findById(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}

export async function deletePost(id) {
  try {
    const result = await Post.findByIdAndDelete(id);
    if (!result) {
      throw new Error("Post not found");
    }
    return { message: "Post successfully deleted" };
  } catch (error) {
    throw new Error(`delete post error: ${error}`);
  }
}

// Update post function (modified to handle comments)
export async function updatePost(id, postFields) {
  try {
    const post = await Post.findById(id);
    if (!post) throw new Error("Post not found");

    // Check if comments are being added
    if (postFields.comment) {
      post.comments.push(postFields.comment);
      delete postFields.comment; // Remove comment from postFields to prevent overwriting other fields
    }

    Object.assign(post, postFields);
    const updatedPost = await post.save();
    return updatedPost;
  } catch (error) {
    throw new Error(`update post error: ${error}`);
  }
}

export async function addComment(postId, comment) {
  try {
    const post = await Post.findById(postId);
    if (!post) throw new Error("Post not found");
    post.comments.push(comment);
    const updatedPost = await post.save();
    return updatedPost;
  } catch (error) {
    throw new Error(`add comment error: ${error}`);
  }
}
