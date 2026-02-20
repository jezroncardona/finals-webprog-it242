import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {createClient} from '@supabase/supabase-js';
import './App.css';

import PostCards from './components/PostCards';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
)



//the actual app display
function BulletinBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_URL.replace(/\/$/, "");
        const {data} =  await axios.get(`${baseUrl}/app`);
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

  const subscription = supabase
    .channel('webprog_stuff:board_post')
    .on(
      'postgres_changes', 
      {
        event: '*',
        schema: 'webprog_stuff',
        table: 'board_post'
      },
      (payload) => {
        fetchPosts;
      }
    )
    .subscribe;
  
  return () => {
    supabase.removeChannel(subscription);
  }

  }, []);

  if (loading) return <p>Loading the board...</p>;



  return (
    <div>
      <PostCards posts={posts}/>
    </div>
  );

}

export default BulletinBoard