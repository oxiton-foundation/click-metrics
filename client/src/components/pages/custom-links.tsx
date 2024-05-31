import { Box, useTheme } from '@mui/material';

const CustomLinks = () => {
    const theme=useTheme();
    return (
        <Box bgcolor={theme.palette.background.paper}className=" w-full h-full">
            <h1 sx={{text:theme.palette.text}}>This is a Custom Links page</h1>
        </Box>
    );
}

export default CustomLinks;