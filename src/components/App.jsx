import { useState, useEffect } from "react";
import { fetchCountries, fetchNextHolidays } from "api/api";
import CountriesList from "./CountriesList/CountriesList";

// ToDo:
// #4 Add a Sort button next to the input. It should sort the list of countries that the user sees on the screen in desc or asc order.
// Default order os desc. The name of the button should indicate what type of sorting will be performed when clicked.
// #5 Next to the Sort button, add a Reset button to empty the app
// * You are welcome to edit/refactor any piece of code below if you believe it can be improved or to express your code style.

export const App = () => {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedCountryHolidays, setselectedCountryHolidays] = useState([]);

	useEffect(() => {
		fetchCountries()
			.then(data => setCountries(data))
			.catch(err => console.log(err));
	}, []);

	const onCountryClick = async ({ target }) => {
		const data = await fetchNextHolidays(target.dataset.code);
		setselectedCountryHolidays(data);
	};

	const onAscendingButtonClick = () => {
		const inAscending = countries.sort((a, b) => b.countryCode.localeCompare(a.countryCode));
		setCountries([...inAscending]);
	};

	const onDescendingButtonClick = () => {
		const Descending = countries.sort((a, b) => a.countryCode.localeCompare(b.countryCode));
		setCountries([...Descending]);
	};

	const filterCountries = ({ target }) => {
		setFilter(target.value);
	};

	const filterNormalized = filter.toLowerCase();
	const filterCountriesNormalized = countries.filter(country => country.name.toLowerCase().includes(filterNormalized));

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
						<button onClick={onAscendingButtonClick}>Asc</button>
						<button onClick={onDescendingButtonClick}>Desc</button>
						<button>{/* #5 Reset button */}</button>
					</section>
					<CountriesList handleClick={onCountryClick} items={filterCountriesNormalized}></CountriesList>
				</div>
				<ul className="info-area">
					{selectedCountryHolidays.map((el, id) => (
						<li key={id}>{el.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
