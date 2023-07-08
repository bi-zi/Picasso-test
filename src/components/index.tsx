import { CommentsType } from "../types/commentsTypes";
import { PostType } from "../types/postsTypes";
import { UserType } from "../types/userTypes";
import { Comments } from "./comments/comments";
import { Posts } from "./posts/posts";
import { Select } from "./select/select";
import { UserInfo } from "./userInfo/userInfo";

interface MainPropsType {
  posts: PostType[];
  users: UserType[];
  comments?: CommentsType[];
}

export const Main = ({ posts, users, comments }: MainPropsType) => {

  return (
    <>
      <Select users={users} />

      <UserInfo users={users} />

      <Posts posts={posts} users={users} />

      <Comments comments={comments} />
    </>
  );
};
