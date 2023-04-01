import WhiteLogo from "../../Assets/Svg/WhiteLogo";
import { loginData } from "../../data/LoginCarousel";
import "../../styles/Login/Login.scss";

const Login = () => {
  const data = loginData.slice(0, 1);
  return (
    <div className="login-container">
      <div className="login-carousel">
        {
          <>
            {data.map((singleData) => {
              return (
                <div key={singleData.id} className="login-carousel-details">
                  <img src={singleData.image} alt="" />
                  <div className="login-carousel-info">
                    <div className="login-carousel-info-logo">
                      <WhiteLogo />
                    </div>

                    <div className="login-carousel-info-comment">
                      <p>"{singleData.comment}"</p>
                    </div>

                    <div className="login-carousel-info-agency">

                    </div>
                  </div>
                </div>
              );
            })}
          </>
        }
      </div>
      <div className="login-credentials"></div>
    </div>
  );
};

export default Login;
