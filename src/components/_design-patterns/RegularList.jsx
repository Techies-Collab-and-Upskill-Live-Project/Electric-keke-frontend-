const ListEmpty = () => {
  return <div className="h-full flex-center">No Data</div>;
};

const RegularList = ({
  list,
  component: Component,
  keyExtractor = [],
  renderListEmpty: RenderListEmpty = ListEmpty,
  ...props
}) => (
  <>
    {list.length === 0 && <RenderListEmpty />}
    {list.map((item, index) => (
      <Component
        key={keyExtractor[index] || index}
        {...{ ...item, ...props }}
      />
    ))}
  </>
);

export default RegularList;
