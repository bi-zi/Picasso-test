import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Main } from "../components";
import { CommentsType, PostType, UserType } from "../types";

interface MyParams {
  id: string;
  post: string;
}

export const UserPage = () => {
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [user, setUser] = useState<UserType>();

  const { id, post } = useParams<keyof MyParams>() as MyParams;

  const postsUrl = post ? `posts/${post}` : `posts?userId=${id}`;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${postsUrl}`
        );

        if (post) {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/${postsUrl}/comments`
          );
          const data = (await response.json()) as CommentsType[];
          setComments(data);
        }

        const data = (await response.json()) as PostType[];
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, [id, post, postsUrl]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = (await response.json()) as UserType;
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, [id]);

  if (!user || !posts) return;

  return (
    <div className={styles.page}>
       <Main users={[user]} posts={posts.length ? posts : [posts]} comments={comments} />
    </div>
  );
};
