export const makeId = (noUrut) => {
  const year = new Date().getFullYear().toString();
  const month = new Date().getMonth().toString();
  const date = new Date().getDate().toString();

  const monthFormated = month.length === 1 ? "0" + month : month;
  const dateFormated = date.length === 1 ? "0" + date : date;
  const noUrutFormated =
    noUrut.toString().length === 1
      ? "00" + noUrut
      : noUrut.toString().length === 2
      ? "0" + noUrut
      : noUrut.toString();

  const id = year + monthFormated + dateFormated + noUrutFormated;
  return id;
};
