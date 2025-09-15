import React from "react";
import { Link } from "react-router-dom";

export default function SecondLayoutPage() {
  return (
    <div>
      <h3>
        This is the <i>second</i> page for the layout
      </h3>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <button>
          <Link to="/">Order Page</Link>
        </button>
      </form>
    </div>
  );
}
