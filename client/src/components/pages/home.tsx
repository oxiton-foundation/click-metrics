import { useNavigate } from "react-router-dom";
import { Button } from "../ui";
import HomeIntro from "./homeintro";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      <HomeIntro />
      <div className="p-5">
        <h1 className="text-2xl font-bold text-center mb-6">Your Connections Platform</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center w-full md:w-1/4">
            <div>
              <p className="text-center">Make it short</p>
              <Button
                onClick={() => navigate("/links")}
                className="border border-blue-500 p-2 inline-block m-2"
              >
                Go to the Link
              </Button>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center w-full md:w-1/4">
            <div>
              <p className="text-center">Make it scannable</p>
              <Button
                onClick={() => navigate("/qr")}
                className="border border-blue-500 p-2 inline-block m-2"
              >
                Go to QR Codes
              </Button>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center w-full md:w-1/4">
            <div>
              <p className="text-center">Make a page</p>
              <Button
                onClick={() => navigate("/link/in/bio")}
                className="border border-blue-500 p-2 inline-block m-2"
              >
                Go to Link in Bio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
