export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
  if (lastSpaceIndex === -1) {
    return text.slice(0, maxLength) + '...';
  }
  return text.slice(0, lastSpaceIndex) + '...';
};
