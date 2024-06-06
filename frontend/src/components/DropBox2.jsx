import React from "react";

function DropBox2() {
  return (
    <div className="mb-2">
      <label for="season" className="mr-[2.1rem]">
        Select Season:
      </label>
      <select
        id="season"
        name="season"
        className="border-2 border-gray-500 rounded-sm px-2"
      >
        <option value="kharif">Kharif</option>
        <option value="rabi">Rabi</option>
        <option value="summer">Summer</option>
        <option value="whole_year">Whole Year</option>
      </select>
    </div>
  );
}

export default DropBox2;
