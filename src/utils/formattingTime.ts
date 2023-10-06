const days = ['SAT', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const formattingTime = (seconds: number) => {
  const dateTime = new Date(seconds * 1000);
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const date = String(dateTime.getDate()).padStart(2, '0');
  const day = days[dateTime.getDay()];
  const result = `${year}.${month}.${date}.${day}`;
  return result;
};

export default formattingTime;
