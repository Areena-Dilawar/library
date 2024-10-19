import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (location.state && location.state.book) {
      setTitle(location.state.book.title || "");
      setAuthor(location.state.book.author || "");
      setYear(location.state.book.year || "");
      console.log("Book received for editing:", location.state.book);
    }
  }, [location.state]);

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const AuthorHandler = (e) => {
    setAuthor(e.target.value);
  };
  const YearHandler = (e) => {
    setYear(e.target.value);
  };

  const AddHandler = () => {
    const updatedBook = { title, author, year };
    console.log("Book Added/Updated:", updatedBook);
    navigate("/BookPage", { state: { updatedBook } });
  };

  return (
    <div className="relative h-screen">
      <div className="h-full w-full">
        <img src="library-book-bookshelf-read.jpg" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 mx-10">
        <div className="flex bg-white bg-opacity-70 p-8 rounded-lg shadow-lg justify-center min-w-full">
          <div className="py-16 mr-10">
            <div className="mb-10">
              <p className="text-center font-serif text-3xl font-bold text-yellow-900">
                Update Book Data
              </p>
            </div>
            <div className="flex justify-between mb-5">
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Enter book title"
                onChange={TitleHandler}
                className="pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="flex justify-between mb-5">
              <input
                type="text"
                name="author"
                value={author}
                placeholder="Enter book author"
                onChange={AuthorHandler}
                className="pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="flex justify-between mb-5">
              <input
                type="text"
                name="year"
                value={year}
                placeholder="Enter book Year"
                onChange={YearHandler}
                className="pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="bg-yellow-950 hover:bg-yellow-800 font-serif text-white py-2 px-6 rounded-lg"
                onClick={AddHandler}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;