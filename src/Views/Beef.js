import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Beef() {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;
  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please remember to create your own{" "}
          <a href="https://www.themealdb.com/">The MealDB API</a>.
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.meals.map((product) => (
      <div
        key={products.data.meals[0].idMeal}
        className="flex-no-shrink w-full md:w-1/4 md:px-3"
      >
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-3">Beef</h1>
      <div className="md:flex flex-wrap md:-mx-3">{content}</div>
    </div>
  );
}

export default Beef;
