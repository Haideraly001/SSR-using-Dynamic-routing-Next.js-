import Link from "next/link";

export async function foodApi() {
  const response = await fetch("https://dummyjson.com/recipes");
  const foodData = await response.json();
  return foodData.recipes;
}

export default async function userApi() {
  const data = await foodApi();
  // console.log(data);
  return (
    <div>
      <h1> Food data </h1>
      {data.map((item) => (
        <p>
          <Link href={`/foodData/${item.id}`}> {item.name} </Link>
        </p>
      ))}
    </div>
  );
}
