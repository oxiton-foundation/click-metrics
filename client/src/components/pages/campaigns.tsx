import { Box ,useTheme} from '@mui/material';

const Campaigns = () => {
    const theme=useTheme()
    return (
        <Box bgcolor={theme.palette.background.paper}className=" w-full h-full">
            <h1 sx={{text:theme.palette.text}}>This is a Campaigns page</h1>
        </Box>
    );
}

export default Campaigns;