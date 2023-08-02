import React, { useState } from 'react';
import axios from 'axios';


const FlightPriceForm = () => {
  const indianAirlines = ['IndiGo', 'Air India', 'SpiceJet', 'Vistara', 'GoAir', 'AirAsia India'];
  const [date, setDate] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [airline, setAirline] = useState('');
  const [flightPrices, setFlightPrices] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(date , source , destination ,airline);
      const response = await axios.post('http://localhost:5000/api/v1/flights', {
        date,
        source,
        destination,
        airline,
      });
       
      
      setFlightPrices(response.data);
      console.log(flightPrices);
    } catch (error) {
      console.error('Error fetching flight prices:', error);
    }
  };

  return (
    <div>
      <div className="w-[40%] py-4 px-10 flex flex-col mx-auto  rounded-lg shadow-xl bg-blue-200">
       <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="border rounded-lg py-2 px-3 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="source" className="block text-gray-700 font-bold mb-2">
            Source
          </label>
          <input
            type="text"
            id="source"
            className="border rounded-lg py-2 px-3 w-full"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 font-bold mb-2">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            className="border rounded-lg py-2 px-3 w-full"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="airline" className="block text-gray-700 font-bold mb-2">
            Airline
          </label>
          <select
            id="airline"
            className="border rounded-lg py-2 px-3 w-full"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          >
            <option value="">Select Airline</option>
            {indianAirlines.map((airlineOption, index) => (
              <option key={index} value={airlineOption}>
                {airlineOption}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Get Prices
        </button>
      </form>
      <div className="mt-4">
      <h2 className="text-lg font-bold">Flight Prices:</h2>
        <div>
        <h3>{flightPrices.airline}</h3>
        <p>{flightPrices.price}</p>
        <p>{flightPrices.message}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FlightPriceForm;
