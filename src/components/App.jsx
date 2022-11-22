import { useState, useEffect } from "react";
import axios from "axios";

// >>>>> Instructions:
// Fork the exercises to create your own personal workspace.
// You will need to create an account. The tool is free.

// ToDo:
// #1 Display full list of items fethced from the API.
// #2 Filter fetched items based on 'Search text' input.
// #3 By clicking on country from the 'Search text' need to fetch and display holidays(selectedCountryHolidays) in the selected county.
// Endpoint for holidays: https://date.nager.at/api/v3/NextPublicHolidays/{countryCode}
// #4 Add a Sort button next to the input. It should sort the list of countries that the user sees on the screen in desc or asc order.
// Default order os desc. The name of the button should indicate what type of sorting will be performed when clicked.
// #5 Next to the Sort button, add a Reset button to empty the app
// * You are welcome to edit/refactor any piece of code below if you believe it can be improved or to express your code style.

// Notes:
// Feel free to edit the code base below as you like 👍
// API description: https://date.nager.at/swagger/index.html
// To see your changes click RUN on top menu

// >>>>>>> Coding part goes next <<<<<<<<

/*
  #1 Place component ListItem here and use it in ListItems component below to display items
*/

const ListItems = ({ items }) => {
  return <ul>{/* #1 place for ListItem */}</ul>;
};

export const App = () => {
  const [data, setData] = useState([]);
  const [selectedCountryHolidays, setselectedCountryHolidays] = useState([]);

  useEffect(() => {
    // NOTE: API might block requests if fetch too frequently
    axios
      .get("https://date.nager.at/api/v3/AvailableCountries")
      .then((response) => {
        console.log("Data Items: ", response.data);
      })
      .catch((error) => console.log("Axios error: ", error));
  }, []);

  const onCountyClick = () => {
    // #3 update this function to handle county click and fetch holidays
  };
  return (
    <div className="container">
      <h1>React Test</h1>
      <div className="body">
        <div className="search-area">
          <section className="search-field">
            <label htmlFor="search">Search text</label>
            {/* #2 On the input, filter the countries listed below */}
            <input id="search" type="text" />

            <button>{/* #4 Sort button */}</button>
            <button>{/* #5 Reset button */}</button>
          </section>
          <ListItems items={data}></ListItems>
        </div>
        <div className="info-area">{/* #3 display selectedCountryHolidays here */}</div>
      </div>
    </div>
  );
};
