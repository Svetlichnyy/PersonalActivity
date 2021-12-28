import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({children, ...props}) => {
    return (
        <Button {...props} variant="contained">
            {children}
        </Button>
    );
};

export default MyButton;