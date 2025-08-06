import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./Simpleblog Pages/ArticleList";
import Logo from "./Simpleblog Pages/asset/Logo_SimpleBlog.png";
import ArticleDetail from "./Simpleblog Pages/ArticleDetail";
import NewArticleForm from "./Simpleblog Pages/NewArticleForm";
function App() {
  return (
    <>
    <Router>
      <nav className="flex justify-between px-20 bg-[#F8F9FA]">
        <a href="/">
        <img src={Logo} alt="logo" width={"100px"} />
        </a>
        <button className="bg-[#1E293B] text-white py-2 px-3 my-6 rounded-xl">
          <a href="/create_article">Create Post</a>
        </button>
      </nav>
      <main className="mx-20 mt-10">
        <Routes>
          <Route path="/" element={<ArticleList />}/>
          <Route path="/details/:index" element={<ArticleDetail />}/>
          <Route path="/create_article" element={<NewArticleForm />}/>
        </Routes>
      </main>
      <footer className="flex justify-between items-center px-10 mt-20 bg-[#F8F9FA]">
        <img src={Logo} alt="logo" width={"200px"} />
        <p className="text-gray-500 mt-10">&copy; 2025 SimpleBlog.</p>
        <div className="text-gray-500 mr-10">
          <p>Terms of us</p>
          <p>Privacy policy</p>
        </div>
      </footer>
      </Router>
    </>
  );
}

export default App;
