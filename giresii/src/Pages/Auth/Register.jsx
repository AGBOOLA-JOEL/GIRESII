import WhiteLogo from "../../Assets/Svg/WhiteLogo";
import { loginData } from "../../data/LoginCarousel";

import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import BlackLogo from "Assets/Svg/BlackLogo";
// import { Carousel } from "react-responsive-carousel";

const Register = () => {
  const data = loginData;
  return (
    <div className="register-container">
      <div className="register-carousel">
        <>
          {data.map((singleData) => {
            return (
              <div key={singleData.id} className="register-carousel-details">
                <img src={singleData.image} alt="" />
                <div className="register-carousel-info">
                  <div className="register-carousel-info-logo">
                    <WhiteLogo />
                  </div>

                  <div className="register-carousel-info-comment">
                    <p>"{singleData.comment}"</p>
                  </div>

                  <div className="register-carousel-info-agency">
                    <div className="register-agency-desc">
                      <p>{singleData.name}</p>
                      <p>
                        {singleData.title},{singleData.agency}
                      </p>
                      <p>{singleData.agencyType}</p>
                    </div>

                    <div className="register-carousel-btn">
                      <div className="register-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="register-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="register-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="register-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="register-carousel-star">
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
      <div className="register-credentials">
        <div className="register-credentials-container">
          <div className="register-black-logo">
            <BlackLogo />
          </div>
          <div className="register-credentials-header">
            <p>join our network</p>
            <p>
              We'd love to have you! join our 100% remote network of writers &
              freelancers
            </p>
          </div>

          <div className="register-google">
            <span>
              <FcGoogle size={30} />
            </span>
            <p>Sign up with Google</p>
          </div>

          <div className="register-span">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className="register-credentials-field">
            <label htmlFor="Name">Name*</label>
            <input type="text" placeholder="Enter your name" />
            <label htmlFor="">Email*</label>
            <input type="text" placeholder="Enter your email" />
            <label htmlFor="">Password*</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <div className="register-credentials-btn">
            <div className="register-create">
              <p>Sign up</p>{" "}
            </div>

            <div className="register-direct">
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

export default Register;
