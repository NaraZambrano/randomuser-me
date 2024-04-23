
import * as React from 'react';
import Box from '@mui/material/Box';

export default function userCard() {
  return (
    <div className='user-card'>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress size={200}/>
        </Box>
    </div>
    
  );
}