export default async function Page({ params }) {
  return (
    <>
      <h1>Product Details</h1>
      <p>This is the product page for product ID: {params.id}</p>
      <p>Here you can find detailed information about the product.</p>
    </>
  );
}
