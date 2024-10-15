import { Link } from "react-router-dom";

const CareSocial = ({ icon, title, href }) => {
  const CareSocailMain = () => {
    return (
      <div className="flex items-center gap-[21px] py-2 border-b border-black">
        <div>
          <img src={icon} alt="headphone" />
        </div>

        <p className="text-2xl">{title}</p>
      </div>
    );
  };

  const CareSocialAsLink = () => {
    return (
      <Link to={href}>
        <div className="flex items-center gap-[21px] py-2 border-b border-black">
          <div>
            <img src={icon} alt="headphone" />
          </div>

          <p className="text-2xl">{title}</p>
        </div>
      </Link>
    );
  };

  return href ? CareSocialAsLink() : CareSocailMain();
};

export default CareSocial;
