export function formatDate(date, monthType = 'short') {
  const steps = new Date(date);
  const formatOptions = {
    day: 'numeric',
    month: monthType,
    year: 'numeric',
  };
  const formatedDate = new Intl.DateTimeFormat('en-US', formatOptions).format(
    steps,
  );

  return formatedDate;
}
