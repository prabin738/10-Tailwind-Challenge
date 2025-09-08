import arrow from "../assets/arrow.png";
import logo from "../assets/avt.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import js from "../assets/java-script.png";
import react from "../assets/react.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";

const SliderAnimation = () => {
  const animate = (element, isLTR, speed) => {
    const intersectionCallback = () => {};
    const interSectionObserver = new IntersectionObserver(intersectionCallback);

    interSectionObserver.observe(element);
  };

  return (
    <div>
      <div id="companies-container" className="flex flex-col gap-8">
        <div id="companies-title" className="flex justify-center gap-2">
          <img className="translate-y-2 w-10 h-10" src={arrow} alt="" />
          <span className="font-medium">APPS POWERED BY TO DESKTOP</span>
          <img
            className=" -scale-x-100 translate-y-2 w-10 h-10"
            src={arrow}
            alt=""
          />
        </div>
        <div id="companies-lines-groups" className="flex flex-col gap-4">
          <div id="line1" className="flex gap-4 w-sccreen -translate-x-48">
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img
                className="w-12 h-12 md:h-16 md:w-16"
                src={facebook}
                alt=""
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={youtube} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Youtube
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img
                className="w-12 h-12 md:h-16 md:w-16"
                src={whatsapp}
                alt=""
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                WhatsApp
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={apple} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                React
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img
                className="w-12 h-12 md:h-16 md:w-16"
                src={facebook}
                alt=""
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={youtube} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Youtube
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img
                className="w-12 h-12 md:h-16 md:w-16"
                src={whatsapp}
                alt=""
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                WhatsApp
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={apple} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                React
              </span>
            </div>
          </div>
          <div id="line2" className="flex gap-4 w-sccreen -translate-x-36">
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={js} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={js} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={js} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={js} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
          </div>
          <div id="line3" className="flex gap-4 w-sccreen -translate-x-48">
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={logo} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={logo} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={js} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={apple} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img
                className="w-12 h-12 md:h-16 md:w-16"
                src={whatsapp}
                alt=""
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={youtube} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={js} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={github} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
            <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border-gray-300">
              <img className="w-12 h-12 md:h-16 md:w-16" src={react} alt="" />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Logo
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
};

export default SliderAnimation;
