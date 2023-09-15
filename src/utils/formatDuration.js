const formatDuration = (durationInMinutes) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  const hoursString = hours > 0 ? `${hours} ч` : "";
  const minutesString = minutes > 0 ? `${minutes} м` : "";

  const separator = hoursString && minutesString ? " " : "";

  const formattedDuration = `${hoursString}${separator}${minutesString}`;

  return formattedDuration;
};
export default formatDuration;
