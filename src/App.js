import React from "react";
import Booklist from "./components/Booklist";
import Header from "./components/Header";
import nineteen from "./assets/1984.jpg";
import brave from "./assets/brave.webp";
import catcher from "./assets/catcher.jpg";
import fahrenheit from "./assets/fahrenheit.jpg";
import gatsby from "./assets/gatsby.jpeg";
import hobbit from "./assets/hobbit.jpg";
import moby from "./assets/moby.jpg";
import mockingbird from "./assets/mockingbird.jpg";
import pride from "./assets/pride.jpeg";
import rings from "./assets/rings.jpg";

function App() {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publisher: "J.B. Lippincott & Co.",
      description:
        "A novel set in the Depression-era South, focusing on themes of racial injustice and moral growth.",
      image: mockingbird,
    },
    {
      title: "1984",
      author: "George Orwell",
      publisher: "Secker & Warburg",
      description:
        "A dystopian novel about a totalitarian regime that uses surveillance and control to manipulate society.",
      image: nineteen,
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      publisher: "Harper & Brothers",
      description:
        "A whaling voyage becomes an allegory of the struggle between man and nature, good and evil.",
      image: moby,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publisher: "T. Egerton",
      description:
        "A romantic novel that explores issues of class, marriage, and morality in 19th-century England.",
      image: pride,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publisher: "Charles Scribner's Sons",
      description:
        "A critique of the American Dream through the tragic life of Jay Gatsby and his pursuit of wealth and love.",
      image: gatsby,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publisher: "Little, Brown and Company",
      description:
        "A coming-of-age story about a disillusioned teenager, Holden Caulfield, as he navigates the adult world.",
      image: catcher,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publisher: "George Allen & Unwin",
      description:
        "A fantasy adventure following Bilbo Baggins as he embarks on an unexpected journey.",
      image: hobbit,
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      publisher: "Ballantine Books",
      description:
        "A dystopian novel where books are outlawed and burned to suppress knowledge and free thought.",
      image: fahrenheit,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      publisher: "Chatto & Windus",
      description:
        "A futuristic society built on technological control, conditioning, and the pursuit of happiness.",
      image: brave,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      publisher: "George Allen & Unwin",
      description:
        "An epic fantasy about the battle between good and evil in the world of Middle-earth.",
      image: rings,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <Booklist books={books} />
    </div>
  );
}

export default App;
