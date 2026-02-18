import React, {useState, useEffect} from 'react';
import axios from 'axios';

function BulletinBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/app`);
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
      posts.map((post) => (
        <div key ={post.id}>
          <p>{post.created_at}</p>
          <p>{post.name}: {post.content}</p>
        </div>
      )
      )
  );

}