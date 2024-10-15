async function dummyApi() {
  const data = await fetch("https://dummyjson.com/products");
  const productData = await data.json();
  return productData.products;
}

export default async function page() {
  const products = await dummyApi();
  return (
    <div>
      <h2>User Products Data</h2>
      {products.map((item, index) => (
        <p>{item.brand}</p>
      ))}
    </div>
  );
}
