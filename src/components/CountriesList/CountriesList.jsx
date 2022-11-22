const CountriesList = ({ items, handleClick }) => {
	return <ul>{items.map(el => (<li data-code={el.countryCode} key={el.countryCode} onClick={handleClick}>{el.name}</li>))}</ul>;
};

export default CountriesList;
