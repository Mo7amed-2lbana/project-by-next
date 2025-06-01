import { ellipsisChr } from "@/app/utils/utils";
import "./card.scss";
import Link from "next/link";

// Define a TypeScript interface for the component props
interface IProps {
  id: string;
  image: string;
  title: string;
  discription: string;
}

// Functional component that takes id, image, and title as props
const Card = ({ id, image, title, discription }: IProps) => {
  return (
    <>
      <div className="card transition-all overflow-hidden">
        {/* Display the product image */}
        <img src={image} alt={title} className="h-[200px] mx-auto" />

        {/* Display the product title, shortened if necessary */}
        <Link href={`products/${id}`} className="cursor-pointer">
          <h2 className="my-2 font-[550]"> {ellipsisChr(title, 20)}</h2>
          <p>{ellipsisChr(discription, 50)}</p>
        </Link>
        {/* Button to view more details about the product */}
        <button className="bg-gray-800  text-white translate-y-[101%] text-center w-full  px-4 py-2 mt-4 rounded">
          <span>Add To Cart</span>
        </button>
      </div>
    </>
  );
};

export default Card;
