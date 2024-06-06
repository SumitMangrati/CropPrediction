import React from "react";

function Dropbox1() {
  return (
    <div className="mb-2">
      {/* <form action="#"> */}
      <label for="state" className="mr-3 ">Select State:</label>
      <select id="state" name="state" className="border-2 border-gray-500 rounded-sm px-2">
        <option value="">Select a State</option>
        <option value="haryana">Haryana</option>
        <option value="assam">Assam</option>
        <option value="telangana">Telangana</option>
        <option value="maharashtra">Maharashtra</option>
        <option value="chhattisgarh">Chhattisgarh</option>
        <option value="kerala">Kerala</option>
        <option value="rajasthan">Rajasthan</option>
        <option value="karnataka">Karnataka</option>
        <option value="odisha">Odisha</option>
        <option value="uttarakhand">Uttarakhand</option>
        <option value="andhra pradesh">Andhra Pradesh</option>
        <option value="jharkhand">Jharkhand</option>
        <option value="arunachal pradesh">Arunachal Pradesh</option>
        <option value="jammu and kashmir">Jammu and Kashmir</option>
        <option value="tamil nadu">Tamil Nadu</option>
        <option value="madhya pradesh">Madhya Pradesh</option>
        <option value="himachal pradesh">Himachal Pradesh</option>
        <option value="mizoram">Mizoram</option>
        <option value="sikkim">Sikkim</option>
        <option value="nagaland">Nagaland</option>
        <option value="chandigarh">Chandigarh</option>
        <option value="tripura">Tripura</option>
        <option value="andaman and nicobar islands">
          Andaman and Nicobar Islands
        </option>
        <option value="punjab">Punjab</option>
        <option value="puducherry">Puducherry</option>
        <option value="manipur">Manipur</option>
        <option value="west bengal">West Bengal</option>
        <option value="uttar pradesh">Uttar Pradesh</option>
        <option value="bihar">Bihar</option>
        <option value="gujarat">Gujarat</option>
        <option value="meghalaya">Meghalaya</option>
        <option value="goa">Goa</option>
        <option value="dadra and nagar haveli">Dadra and Nagar Haveli</option>
      </select>
      {/* <input type="submit" value="Submit" /> */}
      {/* </form> */}
    </div>
  );
}

export default Dropbox1;
