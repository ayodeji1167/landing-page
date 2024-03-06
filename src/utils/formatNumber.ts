export function formatNumber(number: number | string | any) {
  const integerWithCommas = String(Math.ceil(Number(number))).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  return integerWithCommas;
}
