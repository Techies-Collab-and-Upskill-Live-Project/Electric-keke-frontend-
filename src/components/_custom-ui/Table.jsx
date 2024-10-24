export const Table = ({ styling, ...props }) => {
  return <div className={styling} {...props} />;
};

export const TableHead = ({ styling, ...props }) => {
  return <div className={styling} {...props} />;
};

export const TableBody = ({ styling, ...props }) => (
  <div className={styling} {...props} />
);

export const TableContent = ({ styling, ...props }) => (
  <div className={styling} {...props} />
);

export const TableItem = ({styling, ...props}) => (
  <div className={styling} {...props} />
);
