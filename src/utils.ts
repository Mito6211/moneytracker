export const abbreviateMoney = (amount: number): string => {
  return Number.isInteger(amount) ? amount.toFixed(0) : amount.toFixed(2);
};
