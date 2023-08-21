export const removeCurrency= (price: string) => {
  const amount = price.replace("S$", "").replace("$", "");
  return Number(amount);
}