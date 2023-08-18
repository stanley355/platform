export const dollarToRupiah = (dollarAmount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(dollarAmount*15000);
};
