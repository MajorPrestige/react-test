import axios from 'axios';

export const fetchCountries = async () => {
  const { data } = await axios.get(
    'https://date.nager.at/api/v3/AvailableCountries'
  );
  return data;
};

export const fetchNextHolidays = async (countryCode) => {
  const { data } = await axios.get(
    `https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`
  );
  return data;
};

const counter = (num) => {
  return () => {
		num +=1;
		console.log(num)
	};
};

const newCounter = counter(0);

newCounter();
newCounter();
newCounter();
newCounter();
newCounter();
