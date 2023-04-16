import WhiteLogo from "../../Assets/Svg/WhiteLogo";
import { loginData } from "../../data/LoginCarousel";
import "../../styles/Login/SignUp.scss";
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import BlackLogo from "Assets/Svg/BlackLogo";
// import { Carousel } from "react-responsive-carousel";

const SignUp = () => {
  const data = loginData;
  return (
    <div className="sign-container">
      <div className="sign-carousel">
        <>
          {data.map((singleData) => {
            return (
              <div key={singleData.id} className="sign-carousel-details">
                <img src={singleData.image} alt="" />
                <div className="sign-carousel-info">
                  <div className="sign-carousel-info-logo">
                    <WhiteLogo />
                  </div>

                  <div className="sign-carousel-info-comment">
                    <p>"{singleData.comment}"</p>
                  </div>

                  <div className="sign-carousel-info-agency">
                    <div className="sign-agency-desc">
                      <p>{singleData.name}</p>
                      <p>
                        {singleData.title},{singleData.agency}
                      </p>
                      <p>{singleData.agencyType}</p>
                    </div>

                    <div className="sign-carousel-btn">
                      <div className="sign-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="sign-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="sign-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="sign-carousel-star">
                        <AiFillStar fill="white" size={30} />
                      </div>
                      <div className="sign-carousel-star">
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
      <div className="sign-credentials">
        <div className="sign-credentials-container">
          <div className="sign-black-logo">
            <BlackLogo />
          </div>
          <div className="sign-credentials-header">
            <p>join our network</p>
            <p>
              We'd love to have you! join our 100% remote network of writers &
              freelancers
            </p>
          </div>

          <div className="sign-google">
            <span>
              <FcGoogle size={30} />
            </span>
            <p>Sign up with Google</p>
          </div>

          <div className="sign-span">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className="sign-credentials-field">
            <label htmlFor="Name">Name*</label>
            <input type="text" placeholder="Enter your name" />
            <label htmlFor="">Email*</label>
            <input type="text" placeholder="Enter your email" />
            <label htmlFor="">Password*</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <div className="sign-credentials-btn">
            <div className="sign-create">
              <p>Sign up</p>{" "}
            </div>

            <div className="sign-direct">
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

export default SignUp;
