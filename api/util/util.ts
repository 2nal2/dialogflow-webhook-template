export const capitalize = (text: string) => text.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

export const differenceInMonths = (currentDate: Date, pastDate: Date) => {
  const currentMonthQuantity = currentDate.getFullYear() * 12 + currentDate.getMonth();
  const pastMonthQuantity = pastDate.getFullYear() * 12 + pastDate.getMonth();

  return currentMonthQuantity - pastMonthQuantity;
};

export const numberWithCommas = (x: string) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
