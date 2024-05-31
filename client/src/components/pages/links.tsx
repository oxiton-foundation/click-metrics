import React, { useState } from 'react';
import { Button, Box, useTheme, Typography, TextField, TextareaAutosize } from '@mui/material';

// Function to validate URL syntax
const isValidURL = (url: string): boolean => {
    const urlPattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?' + // port
        '(\\/[-a-z\\d%_.~+]*)*' + // path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
    );
    return !!urlPattern.test(url);
};

const Links = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setIsValid(isValidURL(value));
    };

    const theme = useTheme();

    return (
        <Box className="container mx-auto px-4 md:px-0" bgcolor={theme.palette.background.paper}>
            <Box className="p-8 md:p-12 text-black dark:text-white">
                <Box className="flex justify-between items-center">
                    <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>Create New</Typography>
                </Box>
                <Box className="mb-8">
                    <label htmlFor="inputField">Destination</label><br />
                    <TextField
                        id="inputField"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder='https://example.com/my-long-url'
                        fullWidth
                        variant="outlined"
                        error={!isValid}
                        helperText={!isValid && "Invalid URL format"}
                    />
                    <Typography sx={{ color: theme.palette.text.primary }}>You can create 12 more links this month.</Typography>
                </Box>

                <Box className="mt-8">
                    <label htmlFor='title' className="font-bold">Title (optional)</label><br />
                    <TextField
                        id='title'
                        fullWidth
                        variant="outlined"
                        placeholder='My First Blog'
                        className=""
                    />
                    <Button className="mt-4" variant="contained">Pick a random title</Button>
                </Box>
                <Box className="mb-8">
                    <label htmlFor='description' className="font-bold">Description (optional)</label><br />
                    <TextareaAutosize
                        id='description'
                        minRows={3}
                        style={{ width: '100%', padding: '8px', borderColor: '#ccc' }}
                        placeholder='My first blog page URL'
                        className=""
                    />
                </Box>

                <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.text.primary, marginTop: '16px' }}>Ways to share</Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>Short link</Typography>

                <Box className="flex mb-8">
                    <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary, display: 'flex', alignItems: 'center' }}>
                        click.me/
                    </Typography>
                    <TextField
                        id='custom'
                        fullWidth
                        variant="outlined"
                        placeholder='my-first-blog'
                        className="  ml-2"
                    />
                </Box>
                <Button variant="contained" className="mt-4 m-2">Generate short link</Button>
            </Box>
        </Box>
    );
};

export default Links;
