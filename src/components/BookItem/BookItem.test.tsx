import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookItem from "./BookItem";
import type { IBookItem } from "./BookItem";

vi.mock("../Image/Image", () => ({
  default: ({ alt, src }: { alt: string; src: string }) => (
    <img alt={alt} src={src} data-testid="book-image" />
  ),
}));

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    Activity: ({
      children,
      mode,
    }: {
      children: React.ReactNode;
      mode: string;
    }) => (
      <div data-testid="activity" data-mode={mode}>
        {children}
      </div>
    ),
  };
});

vi.mock("@/assets/book-placeholder.png", () => ({
  default: "mocked-placeholder.png",
}));

describe("BookItem", () => {
  const mockBookAddCallback = vi.fn();

  const defaultProps: IBookItem = {
    title: "Test Book",
    description: "Test Description",
    bookCover: "test-cover.jpg",
    bookAddCallback: mockBookAddCallback,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the book title", () => {
    render(<BookItem {...defaultProps} />);
    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("Test Book")).toHaveAttribute("id", "Test Book");
  });

  it("renders the book description", () => {
    render(<BookItem {...defaultProps} />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders default description when description prop is not provided", () => {
    const props = { ...defaultProps, description: undefined };
    render(<BookItem {...props} />);
    expect(screen.getByText("No description present")).toBeInTheDocument();
  });

  it("renders the book cover image", () => {
    render(<BookItem {...defaultProps} />);
    const image = screen.getByTestId("book-image");
    expect(image).toHaveAttribute("src", "test-cover.jpg");
  });

  it("renders placeholder image when bookCover is not provided", () => {
    const props = { ...defaultProps, bookCover: undefined };
    render(<BookItem {...props} />);
    const image = screen.getByTestId("book-image");
    expect(image).toHaveAttribute("src", "mocked-placeholder.png");
  });

  it("renders the toggle description checkbox", () => {
    render(<BookItem {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("toggles description visibility when checkbox is clicked", () => {
    render(<BookItem {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");
    const activity = screen.getByTestId("activity");

    expect(activity).toHaveAttribute("data-mode", "visible");

    fireEvent.click(checkbox);
    expect(activity).toHaveAttribute("data-mode", "hidden");

    fireEvent.click(checkbox);
    expect(activity).toHaveAttribute("data-mode", "visible");
  });

  it('renders the "Add this book again" button', () => {
    render(<BookItem {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Add this book again" });
    expect(button).toHaveAttribute("id", "book-item-button-Test Book");
  });

  it("calls bookAddCallback when button is clicked", () => {
    render(<BookItem {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Add this book again" });

    fireEvent.click(button);
    expect(mockBookAddCallback).toHaveBeenCalledTimes(1);
  });

  it("renders with correct list item id", () => {
    const { container } = render(<BookItem {...defaultProps} />);
    const listItem = container.querySelector("li");
    expect(listItem).toHaveAttribute("id", "book-item-Test Book");
  });

  it("renders label with correct id", () => {
    render(<BookItem {...defaultProps} />);
    const label = screen.getByText("Toggle Description").closest("label");
    expect(label).toHaveAttribute("id", "book-item-label-Test Book");
  });

  it("renders description with correct id", () => {
    render(<BookItem {...defaultProps} />);
    const description = screen.getByText("Test Description");
    expect(description).toHaveAttribute("id", "book-item-description");
  });
});
