// import Lottie from "lottie-react";
import animationNotFound from "../assets/lotte-json/not-found-page.json";

const NotFound = () => {
  return (
    <div className="contents">
      <div
        className={`h-full`}
        style={{ display: "grid", placeItems: "center" }}
      >
        <div className="text-center">
          {/* <Lottie
            animationData={animationNotFound}
            loop={true}
            className="w-56"
          /> */}
          <div className="font-extralight text-2xl text-slate-400">
            ไม่พบหน้าที่ต้องการ
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
