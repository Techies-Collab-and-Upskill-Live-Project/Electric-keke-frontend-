const fetchContentForTable = (
  tableContent,
  contentsToDisplay,
  propToFilter,
  propModel,
  time = 5000
) => {
  return new Promise((resolve) => {
    const data =
      contentsToDisplay === "All"
        ? tableContent
        : tableContent.filter((item) => item[propToFilter] === propModel);
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};

export default fetchContentForTable;
