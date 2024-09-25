const WeatherIcon = ({ iconNumber, summary }) => {
  return (
    <img
      src={`${
        import.meta.env.BASE_URL
      }dist/weather_icons/set04/big/${iconNumber}.png`}
      alt={summary}
      draggable={false}
    />
  );
};

export default WeatherIcon;
