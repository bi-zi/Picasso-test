import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Main } from "../components";
import { PostType, UserType } from "../types";



export const PostsPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = (await response.json()) as PostType[];
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = (await response.json()) as UserType[];
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, []);

  return (
    <div className={styles.page}>
      <Main posts={posts} users={users} />
    </div>
  );
};
