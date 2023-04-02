import WhiteLogo from "../../Assets/Svg/WhiteLogo";
import { loginData } from "../../data/LoginCarousel";
import "../../styles/Login/Login.scss";
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import BlackLogo from "Assets/Svg/BlackLogo";
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
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="login-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      </div>
      <div className="login-credentials">
        <div className="login-credentials-container">
          <div className="login-black-logo">
            <BlackLogo />
          </div>
          <div className="login-credentials-header">
            <p>Create an account</p>
            <p>Let's get started with your blog credentials</p>
          </div>

          <div className="login-credentials-field">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="login-credentials-btn">
            <div className="login-create">
              <p>Create account</p>{" "}
            </div>
            <div className="login-google">
              <span>
                <FcGoogle size={30} />
              </span>
              <p>Sign up with Google</p>
            </div>

            <div className="login-direct">
              <p>
                Already have an account?<span>Log in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
