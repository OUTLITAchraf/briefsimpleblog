import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./Simpleblog Pages/ArticleList";
import Logo from "./Simpleblog Pages/asset/Logo_SimpleBlog.png";
import ArticleDetail from "./Simpleblog Pages/ArticleDetail";
import NewArticleForm from "./Simpleblog Pages/NewArticleForm";
function App() {

  return (
    <>
    <Router>
      <nav className="flex justify-between px-5 lg:px-20 bg-[#F8F9FA]">
        <a href="/">
        <img src={Logo} alt="logo" className="w-[70px] lg:w-[100px]" />
        </a>
        <button className="bg-[#1E293B] text-white text-xs px-2 py-2 rounded-md lg:text-base lg:py-2 lg:px-3 my-6 lg:rounded-xl">
          <a href="/create_article">Create Article</a>
        </button>
      </nav>
      <main className="lg:mx-20 mt-10">
        <Routes>
          <Route path="/" element={<ArticleList />}/>
          <Route path="/details/:index" element={<ArticleDetail />}/>
          <Route path="/create_article" element={<NewArticleForm />}/>
        </Routes>
      </main>
      <footer className="flex justify-between items-center mt-10 lg:px-10 lg:mt-20 bg-[#F8F9FA]">
        <img src={Logo} alt="logo" className="w-[100px] lg:w-[200px]" />
        <p className="text-gray-500 text-xs lg:text-xl mt-10">&copy; 2025 SimpleBlog.</p>
        <div className="text-gray-500 text-xs mr-5 lg:text-xl lg:mr-10">
          <p>Terms of us</p>
          <p>Privacy policy</p>
        </div>
      </footer>
      </Router>
    </>
  );
}

export default App;
