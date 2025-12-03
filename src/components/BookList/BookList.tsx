import type { FC, PropsWithChildren } from "react";
import "./BookList.css";

export interface IBookList extends PropsWithChildren {
  title: string;
}

const BookList: FC<IBookList> = ({ children, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul className="BookList">{children}</ul>
    </>
  );
};

export default BookList;
