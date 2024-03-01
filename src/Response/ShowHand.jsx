import * as React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import BackHandIcon from '@mui/icons-material/BackHand';

export default function ShowHand({ show = false }) {
    const containerRef = React.useRef(null);

    return (
        <Box
            sx={{
                width: 240,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.default',
            }}
        >
            <Box sx={{ p: 2, height: 200, overflow: 'hidden' }} ref={containerRef}>
            <Slide direction="up"
                container={containerRef.current}
                in={show} mountOnEnter unmountOnExit>

                <BackHandIcon />
            </Slide>
        </Box>
    </Box >
  );
}