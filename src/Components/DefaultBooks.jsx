import React, { useState, useEffect } from "react";
import axios from "axios";

const DefaultBooks = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [spotlight, setSpotlight] = useState(null);

  async function getBook(query) {
    let res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: query,
      },
    });
    return res.data.items[0].volumeInfo;
  }

  useEffect(() => {
    let books = [];
    async function setData() {
      books = [
        await getBook("harry+potter"),
        await getBook("sherlock+holmes"),
        await getBook("pride+prejudice"),
      ];
    }
    setData(books).then(() => setFeaturedBooks(books));
  }, []);

  return (
    <div className="flex flex-row gap-4 h-80 my-6 mx-6 p-4 justify-between">
      {featuredBooks.map((book, idx) => (
        <>
          {console.log(book)}
          {spotlight == idx && (
            <div className="bg-[#71C5F461] h-80  absolute w-11/12 mx-3 mr-8 rounded-l-lg">
              <div className="flex flex-row gap-4">
                <div className="flex-none">
                  <img
                    src={book.imageLinks.thumbnail}
                    className="w-64 h-80 -rotate-2 object-cover object-center"
                  />
                </div>
                <div className="flex-initial my-4 ">
                  <h1 className="text-2xl font-bold text-gray-900 my-4">
                    {book.title}
                  </h1>
                  <p className="text-gray-700 my-4">{book.authors[0]}</p>
                  <p className="text-gray-700">
                    {book.description.substring(0, 250)}
                  </p>
                  <div className="my-6">
                    <label className="mx-3">
                      Avg Rating :-{book.averageRating}
                    </label>
                    <label className="mx-3">
                      Rating Count :-{book.ratingsCount}
                    </label>
                    <label className="mx-3">Publisher :{book.publisher}</label>
                    <label className="mx-3">Language :{book.language}</label>
                  </div>
                  <div className="flex-row-reverse flex">
                    <a
                      target="_blank"
                      href={book.previewLink}
                      className="border-2 border-slate-500 py-1.5 px-4 rounded mx-4 "
                    >
                      Now Read!
                    </a>
                    <a
                      target="_blank"
                      href={book.previewLink}
                      className="border-2 border-slate-500 py-1.5 px-4 rounded"
                    >
                      Now Read!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            key={idx}
            className={`flex flex-row-reverse items-center w-[480px] bg-white  ${
              spotlight != null && idx !== spotlight && "invisible"
            } ${spotlight == idx && "invisible"}`}
          >
            <div className="flex flex-col items-center justify-center bg-[#71C5F461] h-[calc(100%-20px)] -translate-x-5 p-8">
              <p className="self-start font-semibold text-2xl mb-3">
                {book.title}
              </p>
              <p className="overflow-hidden mb-8">{book.description}</p>
              <a
                target="_blank"
                href={book.previewLink}
                className="border-2 border-slate-500 py-1.5 px-4 rounded"
              >
                Now Read!
              </a>
            </div>
            <img
              src={book.imageLinks.thumbnail}
              alt=""
              className="-rotate-2 object-contain h-80"
              onClick={() => setSpotlight(idx)}
            />
          </div>
        </>
      ))}
    </div>
  );
};
export default DefaultBooks;
