interface IProps {}
import navLinks from "@/app/(components)/navbar/navLinks";
import Link from "next/link";
const Navbar = ({}: IProps) => {
  return (
    <>
      <nav className="bg-gray-800 flex justify-center items-center   text-white p-4">
        <ul className="flex gap-4 ">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.path}>{link.name}</Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
