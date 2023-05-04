import React from "react";
import useStore from "../zustand/store";

export default function Wishlist() {
  const { wishlist } = useStore();
  return (
    <div className="block">
      <h2 className="text-white justify-center">My wishlist</h2>
      <div>
        <ul>
          {wishlist?.map(({ name }) => (
            <li className="text-white">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
