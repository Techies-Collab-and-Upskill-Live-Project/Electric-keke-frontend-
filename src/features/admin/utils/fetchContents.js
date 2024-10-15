const fetchContent = (time, option, contentType, users, finances) => {
  console.log(option);
  console.log(contentType)
  return new Promise((resolve) => {
    setTimeout(() => {
      let contents;
      if (option === "All") {
        contentType === "user" ? (contents = users) : (contents = finances);
      } else {
        contentType === "user"
          ? (contents = users.filter((item) => item.status === option))
          : (contents = finances.filter((item) => item.status === option));
      }
      resolve(contents);
    }, time);
  });
};

export default fetchContent;
