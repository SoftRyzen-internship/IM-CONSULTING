export const generateEmailText = data => {
  const string = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${key}: ${val} \n \n`),
    '',
  );
  return string;
};
