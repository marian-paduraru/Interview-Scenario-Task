import { useState } from "react";
import BookItem, {
  type BookItemData,
  type IBookItem,
} from "./components/BookItem/BookItem";
import BookList from "./components/BookList/BookList";
import { BOOK_LIST } from "./data/book_items";
import "./App.css";

function App() {
  const [bookList, setBookList] = useState<BookItemData[]>(BOOK_LIST);

  const handleBookItemAdd = (bookItem: Omit<IBookItem, "bookAddCallback">) => {
    setBookList([...bookList, bookItem]);
  };

  return (
    <main>
      <BookList title={"Book List Title"}>
        {bookList.map((bookItem) => (
          <BookItem
            bookAddCallback={() => handleBookItemAdd(bookItem)}
            {...bookItem}
          />
        ))}
      </BookList>
    </main>
  );
}

export default App;
