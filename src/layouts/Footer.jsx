import React from "react";

export default function Footer() {
  return (
    <div className="w-full border-y border-t-purple-950 mx-auto pl-16 pt-7 pb-7 md:flex md:items-center md:justify-between">
      <span className="text-sm text-white sm:text-center">
        © 2023
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}
