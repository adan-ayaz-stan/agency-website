import React from "react";

export default function NavigationBar() {
  return (
    <div
      className={`flex flex-row justify-center items-center gap-6 px-[10%] py-6`}
    >
      <div className="mr-auto">Logo</div>
      <p>About Us</p>
      <p>Contact</p>

      <div className="ml-auto">Language</div>
    </div>
  );
}
