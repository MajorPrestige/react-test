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

let a = 0;

const counter = (number) => {
  console.log(number);
  return () => {
    return (number += 1);
  };
};

counter(a);
counter(a);
counter(a);
counter(a);
counter(a);
console.log(a);


var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

makeCounter();
makeCounter();
makeCounter();
makeCounter();
makeCounter();
console.log(currentCount)

