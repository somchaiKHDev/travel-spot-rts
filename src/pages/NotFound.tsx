import Lottie from "lottie-react";
import animationNotFound from "../assets/lotte-json/not-found-page.json";

const NotFound = () => {
  return (
    <div style={{ display: "contents" }}>
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <div className="text-center">
          <Lottie
            animationData={animationNotFound}
            loop={true}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
