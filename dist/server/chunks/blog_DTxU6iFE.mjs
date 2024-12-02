import { g as getConnection } from './config_C9Mtsncs.mjs';

async function getAllPosts() {
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .query(`
        SELECT 
          p.*,
          STRING_AGG(c.Name, ',') AS Categories
        FROM BlogPosts p
        LEFT JOIN BlogPostCategories pc ON p.Id = pc.BlogPostId
        LEFT JOIN BlogCategories c ON pc.CategoryId = c.Id
        WHERE p.IsPublished = 1
        GROUP BY p.Id, p.Title, p.Slug, p.Description, p.Content, 
                p.Author, p.AuthorImage, p.Image, p.PublishedDate, p.IsPublished
        ORDER BY p.PublishedDate DESC
      `);
    return result.recordset;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

async function getComments(postId) {
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input('postId', postId)
      .query('SELECT * FROM Comments WHERE BlogPostId = @postId AND IsApproved = 1 ORDER BY CreatedAt DESC');
    return result.recordset;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
}

async function addComment(comment) {
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input('blogPostId', comment.blogPostId)
      .input('author', comment.author)
      .input('content', comment.content)
      .query(`
        INSERT INTO Comments (BlogPostId, Author, Content)
        VALUES (@blogPostId, @author, @content);
        SELECT SCOPE_IDENTITY() AS Id;
      `);
    return result.recordset[0].Id;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}

export { addComment as a, getComments as b, getAllPosts as g };
