const CountriesList = ({ items }) => {
	return <ul>{items.map(el => (<li data-code={el.countryCode} key={el.countryCode}>{el.name}</li>))}</ul>;
};

export default CountriesList;
