import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">AppName</div>
      <ul>
        <li>
          <Link
            to="/"
            className="hover:bg-gray-100 hover:text-blue-900 text-black-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li
          className="rounded-md py-3
          border-b
          block"
        >
          Categories
          <ul
            className="py-3 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li>
              <Link
                to="/seafood"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={props.closeMenu}
              >
                Seafood
              </Link>
            </li>
            <li>
              <Link
                to="/beef"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={props.closeMenu}
              >
                Beef
              </Link>
            </li>
            <li>
              <Link
                to="/chicken"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={props.closeMenu}
              >
                Chicken
              </Link>
            </li>
            <li>
              <Link
                to="/lamb"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={props.closeMenu}
              >
                Lamb
              </Link>
            </li>
            <li>
              <Link
                to="/dessert"
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={props.closeMenu}
              >
                Dessert
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:bg-gray-100 hover:text-blue-900 text-black-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
