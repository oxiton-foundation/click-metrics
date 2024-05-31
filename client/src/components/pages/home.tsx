import { useNavigate } from "react-router-dom";
import { Button } from "../ui";
import { Box } from '@mui/material';

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box className='p-5'>
                <Box className="ml-10">
                    <h1 className="text-2xl font-bold">Your Connections Platform</h1>
                    <Box className="flex flex-wrap gap-4 max-w-xl md:max-w-full">
                        <Box className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
                            <Box>
                                <p className="text-center">
                                    Make it short
                                </p>
                                <Button
                                    onClick={() => navigate("/links")}
                                    className="border border-blue-500 p-2 inline-block  m-2">
                                    Go to the Link
                                </Button>
                            </Box>
                        </Box>
                        <Box className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
                            <Box>
                                <p className="text-center">
                                    Make it scannable
                                </p>
                                <Button
                                    onClick={() => navigate("/qr")}
                                    className="border border-blue-500 p-2 inline-block  m-2">
                                    Go to QR Codes
                                </Button>
                            </Box>
                        </Box>
                        <Box className="border border-gray-300 rounded-md p-4 m-4 flex items-center">
                            <Box>
                                <p className="text-center">
                                    Make a page
                                </p>
                                <Button
                                    onClick={() => navigate("/link/in/bio")}
                                    className="border border-blue-500 p-2 inline-block m-2">
                                    Go to Link in Bio
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Home;
