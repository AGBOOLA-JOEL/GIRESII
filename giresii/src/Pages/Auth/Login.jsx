import WhiteLogo from "../../Assets/Svg/WhiteLogo";
import { loginData } from "../../data/LoginCarousel";
import "../../styles/Login/Login.scss";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
// import { Carousel } from "react-responsive-carousel";

const Login = () => {
  const data = loginData;
  return (
    <div className="login-container">
      <div className="login-carousel">
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
                    <div className="login-agency-desc">
                      <p>{singleData.name}</p>
                      <p>
                        {singleData.title},{singleData.agency}
                      </p>
                      <p>{singleData.agencyType}</p>
                    </div>

                    <div className="login-carousel-btn">
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      </div>
      <div className="login-credentials"></div>
    </div>
  );
};

export default Login;
