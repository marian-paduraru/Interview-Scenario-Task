import { Activity, useState, type FC } from "react";
import defaultCardImage from "@/assets/book-placeholder.png";
import Image from "../Image/Image";
import "./BookItem.css";

export type BookItemData = {
  title: string;
  description: string;
  bookCover?: string;
};

export interface IBookItem extends BookItemData {
  bookAddCallback: () => void;
}

const BookItem: FC<IBookItem> = ({
  title,
  description = "No description present",
  bookCover,
  bookAddCallback,
}) => {
  const [showDescription, setShowDescription] = useState<boolean>(true);

  const onCheckboxClick = () => setShowDescription((prev) => !prev);
  const handleImageAddClick = () => bookAddCallback();

  return (
    <li id={`book-item-${title}`} className="BookItem">
      <h2 id={title}>{title}</h2>
      <label id={`book-item-label-${title}`} className="toggleLabel">
        <input onClick={onCheckboxClick} type="checkbox" />
        Toggle Description
      </label>
      <Activity mode={showDescription ? "visible" : "hidden"}>
        <p id="book-item-description">{description}</p>
      </Activity>
      <Image alt={title} src={bookCover || defaultCardImage} />
      <button id={`book-item-button-${title}`} onClick={handleImageAddClick}>
        Add this book again
      </button>
    </li>
  );
};

export default BookItem;
