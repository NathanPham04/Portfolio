import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

function Projects() {
    return (
        <Grid container spacing={2}>
            {/* Small screen take entire row. Big screen take half and half */}
            <Grid size={{xs: 12, md: 6}}>
                <Box>
                    Image/Video
                </Box>
            </Grid>

            <Grid size={{xs: 12, md: 6}}>
                <div>
                    Text Description
                </div>
            </Grid>
        </Grid>
    );
}

export default Projects;