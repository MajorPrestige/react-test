import { useState, useEffect } from "react";
import { fetchCountries, fetchNextHolidays } from "api/api";
import CountriesList from "./CountriesList/CountriesList";

export const App = () => {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedCountryHolidays, setselectedCountryHolidays] = useState([]);
	const [isCountriesDesc, setIsCountriesDesc] = useState(true);

	useEffect(() => {
		fetchCountries()
			.then(data => setCountries(data))
			.catch(err => console.log(err));
	}, []);

	const onCountryClick = async ({ target }) => {
		const data = await fetchNextHolidays(target.dataset.code);
		setselectedCountryHolidays(data);
	};

	const onAscButtonClick = () => {
		const inAscending = countries.sort((a, b) => b.countryCode.localeCompare(a.countryCode));
		setIsCountriesDesc(false);
		setCountries([...inAscending]);
	};

	const onDescButtonClick = () => {
		const inDescending = countries.sort((a, b) => a.countryCode.localeCompare(b.countryCode));
		setIsCountriesDesc(true);
		setCountries([...inDescending]);
	};

  const onResetButtonClick = () => {
    setCountries([]);
    setFilter("");
    setselectedCountryHolidays([]);
  }

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
						{isCountriesDesc ? (
							<button onClick={onAscButtonClick}>Asc</button>
						) : (
							<button onClick={onDescButtonClick}>Desc</button>
						)}
						<button onClick={onResetButtonClick}>Reset</button>
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
