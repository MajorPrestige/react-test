import { useState, useEffect } from "react";
import { fetchCountries } from "api/api";
import CountriesList from "./CountriesList/CountriesList";

// ToDo:
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

export const App = () => {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedCountryHolidays, setselectedCountryHolidays] = useState([]);

	useEffect(() => {
		fetchCountries()
			.then(data => setCountries(countries => (countries = data)))
			.catch(err => console.log(err));
	}, []);

	const filterCountries = ({ target }) => {
		setFilter(target.value);
	};

  const filterNormalized = filter.toLowerCase();
  const filterCountriesNormalized = countries.filter(country =>
    country.name.toLowerCase().includes(filterNormalized)
  );

	const onCountyClick = () => {
		// #3 update this function to handle county click and fetch holidays
	};

	return (
		<div className="container">
			<h1>React Test</h1>
			<div className="body">
				<div className="search-area">
					<section className="search-field">
						<label>
							Search text
							<input type="text" onChange={filterCountries} value={filter} />
						</label>
						<button>{/* #4 Sort button */}</button>
						<button>{/* #5 Reset button */}</button>
					</section>
					<CountriesList items={filterCountriesNormalized}></CountriesList>
				</div>
				<div className="info-area">{/* #3 display selectedCountryHolidays here */}</div>
			</div>
		</div>
	);
};
