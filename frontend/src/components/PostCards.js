import * as functions from './functions.js';
import './PostCards.css'

function PostCards({ posts }) {
  return (
    <>
      {
        posts.map(
          (post) => (
            <div key = {post.id} className = "bulletin_post">
              <span className = "anon_name">{post.name}</span> <span className = "post_date">{functions.formatDate(post.created_at)}</span>
              <p>{post.content}</p>
            </div>
          )
        )
      }
    </>
  );
}

export default PostCards;