interface IProps {
  title: string;
}

const HeadingPage = ({ title }: IProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold my-3">{title}</h1>
    </>
  );
};

export default HeadingPage;
