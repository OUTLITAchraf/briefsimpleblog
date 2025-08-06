import { useState } from "react";

export default function NewArticleForm() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date_public, setDate_public] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [list_articles, setList_articles] = useState([]);

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // base64 image string
            };
            reader.readAsDataURL(file);
        }
    }

    function AddArticle(e) {
        e.preventDefault();
        const newArticle = { author: author, title: title, description: description, date_public: date_public, content: content, img: image }
        setList_articles([...list_articles, newArticle])
        setAuthor('');
        setTitle('');
        setDescription('');
        setDate_public('');
        setContent('');
        setImage(null);
    }
    function handlerAuthor(e) {
        setAuthor(e.target.value)
    }
    function handlerTitle(e) {
        setTitle(e.target.value)
    }
    function handlerDescription(e) {
        setDescription(e.target.value)
    }
    function handlerDate_public(e) {
        setDate_public(e.target.value)
    }
    function handlerContent(e) {
        setContent(e.target.value)
    }

    return <>
        <fieldset className="border border-black rounded-md">
            <legend className="text-3xl ml-10 px-2">Create Article</legend>
            <form className="mx-10 my-5" onSubmit={AddArticle}>
                <div className="mb-5">
                    <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900">Author</label>
                    <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={author} onChange={handlerAuthor} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={title} onChange={handlerTitle} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="desription" className="block mb-2 text-sm font-medium text-gray-900">Desription</label>
                    <input type="text" id="desription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={description} onChange={handlerDescription} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="date_public" className="block mb-2 text-sm font-medium text-gray-900">Date Public</label>
                    <input type="date" id="date_public" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={date_public} onChange={handlerDate_public} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Content</label>
                    <textarea id="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={content} onChange={handlerContent}></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                    <input type="file" id="image" accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="user_avatar_help" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </fieldset>

         {list_articles.length > 0 && (
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">Articles:</h2>
                    {list_articles.map((article, index) => (
                        <div key={index} className="mb-4 border p-4 rounded-lg">
                            <h3 className="text-xl font-semibold">{article.title}</h3>
                            <p>{article.description}</p>
                            {article.img && <img src={article.img} alt="Uploaded" className="mt-2 w-40 h-40 object-cover rounded-md" />}
                        </div>
                    ))}
                </div>
            )}
    </>
}