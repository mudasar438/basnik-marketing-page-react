import React from 'react'
import images from './img'
import {Box} from '@mui/material'
import {Grid} from '@mui/material';
import {Button} from '@mui/material'
import {Typography} from "@mui/material"

const Hero = () => {
  return (
    <Box>
        <Grid container>
            <Grid item md={6}>
                <Box>
                <Typography variant="h1">
                    Tell a Batter Brand Story
                </Typography>
                <Typography variant="body2">
                Automate the way you search through hashtags and suggested
profiles to find results 100x faster.

                </Typography>
                <Button variant='contained'>
                    Request Demo
                </Button>

                </Box>

            </Grid>
            <Grid item md={6}>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <img src={images.card1} alt="" />
                    </Box>
                    <Box>
                        <img src={images.card2} alt="" />
                    </Box>
                </Box>

            </Grid>
        </Grid>

    </Box>
  )
}

export default Hero