/**
 * @name numberToIDR
 * @param {number} num
 * @returns {string} Example Rp3.000.000
 */
function numberToIDR(num: number): string {
  const convertToIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(num)
    .toString();

  /* from Rp 3.000.000,00 to Rp3.000.000 (removing space and last three characters) */
  return convertToIDR.replace(/\s+/g, '').slice(0, convertToIDR.length - 4);
}

export default numberToIDR;
