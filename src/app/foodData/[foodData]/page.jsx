export async function foodDataSet() {
  const response = await fetch("https://dummyjson.com/recipes");
  const foodData = await response.json();
  return foodData.recipes;
}

export default async function foodDetails({ params }) {
  let data = await foodDataSet();

  const foodItem = data.find((item) => item.id.toString() === params.foodData);
  // const fondItem = data.filter(item)

  return (
    <div>
      <h1>Food Details</h1>
      <h2> food : {params.foodData}</h2>
      {foodItem.ingredients.map((ingredient) => (
        <p>{ingredient}</p>
      ))}
      <h2>Meat Type</h2>
      {foodItem.mealType.map((mealTypes) => {
        return <p>{mealTypes}</p>;
      })}
    </div>
  );
}
