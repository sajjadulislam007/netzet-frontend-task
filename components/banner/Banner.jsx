import Image from "next/image";
import BannerImage from "../../assets/images/banner--img.png";

const Banner = () => {
  return (
    <div className="banner--wrapper">
      <div className="holder">
        <div className="bannerContent--wrap">
          <div className="bannerContent--wrap__row">
            <div className="bannerContent--wrap__row_info">
              <div className="banner--content">
                <h2 className="banner--content__title">
                  Want to Turn Social Media Into a Profitable Career?
                </h2>
                <h2 className="banner--content__subTitle">
                  Discover your way to success with Fametonic:
                </h2>

                <ul className="banner--content__list">
                  <li className="banner--content__list_item">
                    Start growing your influence right away—no waiting required!
                  </li>
                  <li className="banner--content__list_item">
                    Create viral TikToks and Reels step by step with
                    easy-to-follow lessons
                  </li>
                  <li className="banner--content__list_item">
                    Use a Personal AI Worker to boost your content{" "}
                  </li>
                  <li className="banner--content__list_item">
                    Learn from expert-led courses designed for aspiring
                    influencers
                  </li>
                </ul>

                <div className="banner--content__ctaBtnWrap">
                  <a href="#" className="banner--content__ctaBtnWrap_ctaBtn">
                    GET STARTED
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z"
                        fill="white"
                        stroke="white"
                      />
                    </svg>
                  </a>
                  <p className="banner--content__ctaBtnWrap_ctaInfo">
                    1-minute quiz for personalized Insights
                  </p>
                </div>

                <div className="banner--content__buttonInstructions">
                  <p className="banner--content__buttonInstructions_text">
                    By clicking "Get Started", you agree with Terms and
                    Conditions, Privacy Policy, Subscription Terms
                  </p>
                  <p className="banner--content__buttonInstructions_textSmall">
                    Fametonic 2025 ©All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="bannerContent--wrap__row_media">
              <div className="banner--content">
                <div className="banner--content__media">
                  <Image src={BannerImage} alt="Banner Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
