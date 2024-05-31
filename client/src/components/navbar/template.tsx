import Header from "./header";
import { Box } from '@mui/material';
import Sidebar from "./sidebar";

const Template = ({theme}) => {
    return (
        <>
            <Box className="flex min-h-screen">
                <Sidebar />
                <Header theme={theme} />
            </Box>
        </>
    );
};

export default Template;