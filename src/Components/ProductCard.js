import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.product.idMeal}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.strMealThumb}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${props.product.idMeal}`}>
            {props.product.strMeal}
          </Link>
        </h3>
        <div className="font-bold mb-3"> {props.product.name}</div>
        <div className="mb-3">{props.product.strInstructions}</div>
        <Link
          to={`/products/${props.product.idMeal}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
