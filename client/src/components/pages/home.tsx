import { useNavigate } from "react-router-dom";
import { Button } from "../ui";
import Header from "../navbar/header";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-500 mb-1 text-xl">Authentication</h2>
          <p class="leading-relaxed">Get yourself registered on our website and start the journey.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-500 mb-1 text-xl">URL Shortening</h2>
          <p class="leading-relaxed">Shorten the URL of yours choice and also get to know its all stats as well.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-500 mb-1 text-xl">Scan QR</h2>
          <p class="leading-relaxed">Scan QR within our web application with onetime authentication and also get the realtime details of it too. </p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-500 mb-1 text-xl">Track Detailed Analysis</h2>
          <p class="leading-relaxed">Track the indepth analysis of the URL and also get inndepth analysis of the data of URL as well.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-20">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500">Our Customers & Stats</h1>
  </div>
  <div class="flex flex-wrap -m-4 text-center">
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M8 17l4 4 4-4m-4-5v9"></path>
          <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
        </svg>
        <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
    </div>
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
        </svg>
        <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
    </div>
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M3 18v-6a9 9 0 0118 0v6"></path>
          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
        </svg>
        <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
        <p class="leading-relaxed">Files</p>
      </div>
    </div>
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
        <p class="leading-relaxed">Places</p>
      </div>
    </div>
  </div>
</div>
</section>


      <div className="p-5">
        <div >
          <h1 className="text-2xl font-bold">Your Connections Platform</h1>
          <div className="flex flex-wrap gap-4 max-w-xl md:max-w-full">
            <div className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
              <div>
                <p className="text-center">Make it short</p>
                <Button
                  onClick={() => navigate("/links")}
                  className="border border-blue-500 p-2 inline-block  m-2"
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
                  className="border border-blue-500 p-2 inline-block  m-2"
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
