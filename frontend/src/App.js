import React, {useState, useEffect} from 'react';
import * as functions from './functions.js';
import axios from 'axios';

//the actual app display
function BulletinBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_URL.replace(/\/$/, ""); // Removes any trailing slash
        const response = await axios.get(`${baseUrl}/app`);
        setPosts (response.data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading the board...</p>;



  return (
    <div>
      {posts.map((post) => (
        <div key = {post.id}>
          <p>{functions.formatDate(post.created_at)}</p>
          <p>{post.name}: {post.content}</p>
        </div>
      ))}
    </div>
  );

}
export default BulletinBoard;

