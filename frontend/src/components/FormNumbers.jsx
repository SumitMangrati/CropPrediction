import React from "react";

function FormNumbers() {
  return (
    <div className="flex flex-col gap-3">
      <label for="nitrogen" className="flex gap-2 justify-between">
        {" "}
        Nitrogen
        <input
          type="text"
          id="nitro"
          name="nitrogen"
          placeholder="in kh/ha"
          className="border-2 px-4 border-gray-500 rounded-sm"
        ></input>
      </label>
      <label for="phosphorous" className="flex gap-2 justify-between">
        Phosphorous
        <input
          type="text"
          id="phospo"
          name="phosphorous"
          placeholder="in kh/ha"
          className=" border-2 px-4 border-gray-500 rounded-sm"
        ></input>
      </label>
      <label for="potassium" className="flex gap-2 justify-between">
        Potassium
        <input
          type="text"
          id="potas"
          name="potassium"
          placeholder="in kh/ha"
          className=" border-2 px-4 border-gray-500 rounded-sm"
        ></input>
      </label>
      <label for="ph" className="flex gap-2 justify-between">
        pH
        <input
          type="text"
          id="ph"
          name="ph"
          placeholder="enter the ph"
          className=" border-2 px-4 border-gray-500 rounded-sm"
        ></input>
      </label>
      <label for="rainfall" className="flex gap-2 justify-between">
        Rainfall
        <input
          type="text"
          id="rain"
          name="rainfall"
          placeholder="in mm"
          className=" border-2 px-4 border-gray-500 rounded-sm"
        ></input>
      </label>
      <label for="temperature" className="flex gap-2 justify-between">
        Temperature
        <input
          type="text"
          id="temp"
          name="temperature"
          placeholder="in Celsius"
          className=" border-2 px-4 border-gray-500 rounded-sm"
        ></input>
      </label>
      <label for="area" className="flex gap-2 justify-between">
        Area
        <input
          type="text"
          id="area"
          name="area"
          placeholder="in hectares"
          className=" border-2 px-4 border-gray-500 rounded-sm"
        ></input>
      </label>
    </div>
  );
}

export default FormNumbers;
