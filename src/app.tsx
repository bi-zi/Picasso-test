import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostsPage } from "./pages/postsPage";
import { UserPage } from "./pages/userPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/User/:id/:post?" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};
