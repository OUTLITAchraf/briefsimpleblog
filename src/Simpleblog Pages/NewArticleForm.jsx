import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewArticleForm() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date_public, setDate_public] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function AddArticle(e) {

        e.preventDefault();

        let formIsValid = true;
        let newErrors = {};

        if (!author) {
            formIsValid = false;
            newErrors.author = 'Veuillez remplir le champ de author obligatoire.';
        }

        if (!title) {
            formIsValid = false;
            newErrors.title = 'Veuillez remplir le champ de title obligatoire.';
        }

        if (!description) {
            formIsValid = false;
            newErrors.description = 'Veuillez remplir le champ de description obligatoire.';
        }

        if (!date_public) {
            formIsValid = false;
            newErrors.date_public = 'Veuillez remplir le champ de date publishe obligatoire.';
        }

        if (!content) {
            formIsValid = false;
            newErrors.content = 'Veuillez remplir le champ de content obligatoire.';
        }

        if (!image) {
            formIsValid = false;
            newErrors.image = 'Veuillez remplir le champ de image obligatoire.';
        }

        if (!formIsValid) {
            setErrors(newErrors);
            return;
        }

        const newArticle = {
            id: Date.now(),
            author: author,
            title: title,
            description: description,
            publishedAt: date_public,
            content: content,
            urlToImage: image
        }


        const existingArticles = JSON.parse(localStorage.getItem("userArticles")) || [];
        const updatedArticles = [newArticle, ...existingArticles];
        localStorage.setItem("userArticles", JSON.stringify(updatedArticles));

        setAuthor('');
        setTitle('');
        setDescription('');
        setDate_public('');
        setContent('');
        setImage(null);
        setErrors({});

        navigate("/", { state: { success: true } });
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
        <fieldset className="border border-black rounded-md mx-3 lg:mx-0">
            <legend className="text-3xl ml-10 px-2">Create Article</legend>
            <form className="mx-10 my-5" onSubmit={AddArticle}>
                <div className="mb-5">
                    <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900">Author</label>
                    <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={author} onChange={handlerAuthor} />
                    {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={title} onChange={handlerTitle} />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="desription" className="block mb-2 text-sm font-medium text-gray-900">Desription</label>
                    <input type="text" id="desription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={description} onChange={handlerDescription} />
                    {errors.desription && <p className="text-red-500 text-sm mt-1">{errors.desription}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="date_public" className="block mb-2 text-sm font-medium text-gray-900">Date Public</label>
                    <input type="date" id="date_public" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={date_public} onChange={handlerDate_public} />
                    {errors.date_public && <p className="text-red-500 text-sm mt-1">{errors.date_public}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Content</label>
                    <textarea id="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={content} onChange={handlerContent}></textarea>
                    {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                    <input type="file" id="image" accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="user_avatar_help" />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                </div>
                <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </fieldset>

    </>
}