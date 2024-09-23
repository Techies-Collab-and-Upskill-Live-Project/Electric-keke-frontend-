const Button = ({ title, styles }) => {
  return (
    <div className={`${styles} flex justify-center py-[7px] w-[150px] cursor-pointer`}>
        <h1 className={`${styles} text-[13px]`}>{title}</h1>
    </div>
  )
}

export default Button