import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BookPage() {
  const BooksInfo = [
    { title: "Alice in Wonderland", author: "Lewis Carroll", year: 2020 },
    { title: "David Copperfield", author: "Charles Dickens", year: 2018 },
    { title: "The French Revolution", author: "Thomas Carlyle", year: 2021 },
    { title: "The Room on the Roof", author: "Ruskin Bond", year: 2019 },
  ];

  const [books, setBooks] = useState(BooksInfo);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const SearchHandler = (e) => {
    setSearch(e.target.value);
  };

  const EditHandler = (book) => {
    navigate("/Edit", { state: { book } });
  };

  const DeleteHandler = (book) => {
    const updatedBooks = books.filter(
      (b) =>
        b.title !== book.title ||
        b.author !== book.author ||
        b.year !== book.year
    );
    setBooks(updatedBooks);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.year.toString().includes(search.toLowerCase())
    );
  });
  useEffect(() => {
    if (location.state) {
      const updatedBook = location.state.updatedBook;
      const updatedBooks = books.map((book) =>
        book.title === updatedBook.title ? updatedBook : book
      );
      setBooks(updatedBooks);
    }
  }, []);

  return (
    <div className="relative h-screen">
      <div className="h-full w-full">
        <img
          src="library-book-bookshelf-read.jpg"
          alt="Library Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 mx-10">
        <div className="flex flex-col bg-white bg-opacity-70 rounded-lg shadow-lg min-w-full p-14">
          <div className="mb-10">
            <p className="text-center font-serif text-3xl font-bold text-yellow-900">
              Welcome to the Library Management System!
            </p>
          </div>
          <div className="relative flex gap-10 justify-center items-center mb-5">
            <div className="relative flex justify-center items-center w-96">
              <input
                type="text"
                name="search"
                placeholder="Search here..."
                value={search}
                onChange={SearchHandler}
                className="px-3 py-2 border border-green-300 rounded-lg w-full"
              />
              <i className="absolute right-4 text-xl text-yellow-950 fa fa-search"></i>
            </div>
          </div>
          <div>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border border-yellow-950 p-2 text-yellow-950 font-bold text-lg">
                    Title
                  </th>
                  <th className="border border-yellow-950 p-2 text-yellow-950 font-bold text-lg">
                    Author
                  </th>
                  <th className="border border-yellow-950 p-2 text-yellow-950 font-bold text-lg">
                    Year
                  </th>
                  <th className="border border-yellow-950 p-2 text-yellow-950 font-bold text-lg">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr>
                    <td className="border border-yellow-950 p-2 text-center">
                      {book.title}
                    </td>
                    <td className="border border-yellow-950 p-2 text-center">
                      {book.author}
                    </td>
                    <td className="border border-yellow-950 p-2 text-center">
                      {book.year}
                    </td>
                    <td className="border border-yellow-950 p-2 text-center">
                      <button
                        onClick={() => EditHandler(book)}
                        className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => DeleteHandler(book)}
                        className="bg-red-500 text-white px-2 py-1 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredBooks.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center p-2 text-yellow-950">
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;