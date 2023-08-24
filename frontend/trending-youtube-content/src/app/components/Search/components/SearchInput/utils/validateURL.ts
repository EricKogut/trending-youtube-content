const extractUsername = (url: string) => {
  const regex = /youtube\.com\/@([^/]+)/;
  const match = url.match(regex);

  if (match) {
    return match[1];
  }

  return false;
};

export default extractUsername;
