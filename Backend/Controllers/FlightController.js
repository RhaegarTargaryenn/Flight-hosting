const mockFlightData = require('../flightData');

const getFlights = (req, res) => {
  const { source, destination, date, airline } = req.body;

  const filteredFlights = mockFlightData.filter((flight) => {
    return (
      flight.source.toLowerCase() === source.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase() &&
      flight.airline.toLowerCase() === airline.toLowerCase()
    );
  });

  if (filteredFlights.length === 0) {
    res.status(404).json({ message: 'No flights found for the given criteria.' });
  } else {
    const flight = filteredFlights[0];
    const price = flight.prices[date];
    if (price) {
      res.json({ airline: flight.airline, price: price });
    } else {
      res.json({ message: 'No flight available for the given date.' });
    }
  }
};

module.exports = {
  getFlights,
};
