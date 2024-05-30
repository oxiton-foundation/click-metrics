import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Button } from "../ui";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a data loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader appears for 2 seconds

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3498db" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <>
      <div className="p-5">
        <div>
          <h1 className="text-2xl font-bold">Your Connections Platform</h1>
          <div className="flex flex-wrap gap-4 max-w-xl md:max-w-full">
            <div className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
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
            <div className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
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
            <div className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
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
    </>
  );
};

export default Home;
