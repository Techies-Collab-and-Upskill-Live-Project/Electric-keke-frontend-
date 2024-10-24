const RegularList = ({
  list,
  component: Component,
  keyExtractor,
  ...props
}) => {
  console.log(keyExtractor);
  return (
    <>
      {list.map((item, index) => (
        <Component
          // key={index}
          key={keyExtractor[index]}
          {...{ ...item, ...props }}
        />
      ))}
    </>
  );
};

export default RegularList;
