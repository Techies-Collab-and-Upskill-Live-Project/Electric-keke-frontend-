const RegularList = ({
  list,
  component: Component,
  keyExtractor,
  ...props
}) => (
  <>
    {list.map((item, index) => (
      <Component key={keyExtractor[index]} {...{ ...item, ...props }} />
    ))}
  </>
);

export default RegularList;
