import ArticleList from "./Simpleblog Pages/ArticleList";
import Logo from "./Simpleblog Pages/asset/Logo_SimpleBlog.png";
function App() {
  return (
    <>
      <nav className="flex justify-between px-20 bg-[#F8F9FA]">
        <img src={Logo} alt="logo" width={"100px"} />
        <button className="bg-[#1E293B] text-white py-2 px-3 my-6 rounded-xl">
          Create Post
        </button>
      </nav>
      <main className="mx-20 mt-10">
        <ArticleList />
      </main>
      <footer className="flex justify-between items-center px-10 mt-20 bg-[#F8F9FA]">
        <img src={Logo} alt="logo" width={"200px"} />
        <p className="text-gray-500 mt-10">&copy; 2025 SimpleBlog.</p>
        <div className="text-gray-500 mr-10">
          <p>Terms of us</p>
          <p>Privacy policy</p>
        </div>
      </footer>
    </>
  );
}

export default App;
