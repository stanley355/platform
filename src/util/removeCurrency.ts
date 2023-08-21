export const removeCurrency= (price: string) => {
  const amount = price.replace("$", "").replace("S$", "");
  return Number(amount);
}