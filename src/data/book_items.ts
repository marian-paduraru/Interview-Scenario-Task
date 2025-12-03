import type { BookItemData } from "../components/BookItem/BookItem";

export const BOOK_ITEM_1: BookItemData = {
  title: "Book 1",
  description: " Book 1 interesting description",
  bookCover: "/src/assets/cover_1.png",
};
export const BOOK_ITEM_2: BookItemData = {
  title: "Book 2",
  description: " Book 2 interesting description",
  bookCover: "/src/assets/cover_2.png",
};
export const BOOK_ITEM_3: BookItemData = {
  title: "Book 3",
  description: " Book 3 interesting description",
  bookCover: "/src/assets/cover_3.png",
};
export const BOOK_ITEM_4: BookItemData = {
  title: "Book 4",
  description: " Book 4 has an invalid image url",
  bookCover: "/src/assets/cover_45.png",
};
export const BOOK_ITEM_5: BookItemData = {
  title: "Book 5",
  description: " Book 5 has no cover",
};

export const BOOK_LIST = [
  BOOK_ITEM_1,
  BOOK_ITEM_2,
  BOOK_ITEM_3,
  BOOK_ITEM_4,
  BOOK_ITEM_5,
];
