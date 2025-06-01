// Importing the Card component to display each product
import Card from "./(components)/card/Card";

// Importing the heading component for the page title
import HeadingPage from "./(components)/headingPage/HeadingPage";

// Importing the function that fetches all products (likely from a database or mock API)
import { allProducts } from "./data/data";

// Main component for the homepage
export default async function Home() {
  // Fetching all products using await because allProducts is an async function
  const products = await allProducts();

  return (
    <main className="my-5">
      <div className="container">
        {/* Render the heading of the page */}
        <HeadingPage title="Welcome to my Store" />

        {/* A short description or label below the heading */}
        <p className=" text-lg mt-10 mb-4">Some Products :</p>

        {/* Grid layout with 7 columns and spacing between items */}
        <div className="grid grid-cols-5 gap-6">
          {products.map((data) => (
            // Rendering each product inside a Card component
            <Card
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              discription={data.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
