interface IProps {}

const Footer = ({}: IProps) => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ Eng/Mohamed Elbanna.
        </p>
      </footer>
    </>
  );
};

export default Footer;
