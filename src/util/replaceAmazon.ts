export const replaceAmazon = (link: string, path: string) => {
  return link
    .replace("https://www.amazon.com", path)
    .replace(".com", "")
    .replace(".au", "")
    .replace(".sg", "");
};
