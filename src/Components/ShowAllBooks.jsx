import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import InputContext from "./context/Inputcontext";

const ShowAllBooks = () => {
  const [defaultBooksList, setDefaultBooksList] = useState([]);
  const { input, _ } = useContext(InputContext);

  useEffect(() => {
    getBooks(input);
  }, [input]);

  function getBooks(query) {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        setDefaultBooksList(response.data.items);
        // console.log(response.data.items[0].volumeInfo.title);
        // console.log(response.data.items[0].volumeInfo.description);
        // console.log(response.data.items[0].volumeInfo.imageLinks.thumbnail);
      });
  }

  return (
    <>
      <h1 className="mx-12 my-4 text-2xl">More Books Like This </h1>
      <div className="grid grid-cols-5 gap-4 justify-between  my-auto">
        {defaultBooksList.map((book, index) => {
          // console.log(book.volumeInfo.imageLinks.thumbnail);
          return (
            <div>
              <img
                className="object-contain h-48 w-96"
                key={index}
                src={book.volumeInfo.imageLinks.thumbnail}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShowAllBooks;
