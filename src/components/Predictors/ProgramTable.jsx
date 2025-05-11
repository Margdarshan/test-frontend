import React from 'react';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';

const data = [
  {
    institute: 'National Institute of Technology, Durgapur, West Bengal',
    quota: 'Home State',
    closingRank: '100000',
    branch: 'Electronics and Communication Engineering',
    programDetails: '4 Years, Bachelors of Technology',
    gender: 'Gender Neutral',
    probability: 'Medium',
    probabilityLevel: 'Medium',
  },
  {
    institute: 'National Institute of Technology, Durgapur, West Bengal',
    quota: 'Home State',
    closingRank: '100000',
    branch: 'Electronics and Communication Engineering',
    programDetails: '4 Years, Bachelors of Technology',
    gender: 'Female',
    probability: 'High',
    probabilityLevel: 'High',
  },
];

const ProgramTable = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid
            container
            spacing={2}
            sx={{ fontWeight: 'bold', borderBottom: '1px solid #ccc' }}
          >
            <Grid item xs={3}>
              Institute
            </Grid>
            <Grid item xs={1}>
              Quota
            </Grid>
            <Grid item xs={2}>
              Closing Rank
            </Grid>
            <Grid item xs={2}>
              Branch
            </Grid>
            <Grid item xs={2}>
              Program Details
            </Grid>
            <Grid item xs={1}>
              Probability
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        {data
          ? data.map((program, index) => (
              <Grid
                container
                spacing={2}
                key={index}
                sx={{ borderBottom: '1px solid #ccc', paddingY: '8px' }}
              >
                <Grid item xs={12} md={3}>
                  <Typography variant="body1">{program.institute}</Typography>
                  <Chip
                    label={program.gender}
                    sx={{ mt: 1 }}
                    color={
                      program.gender === 'Female' ? 'secondary' : 'primary'
                    }
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  <Typography variant="body2">{program.quota}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body2">{program.closingRank}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body2">{program.branch}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="body2">
                    {program.programDetails}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Chip
                    label={program.probability}
                    sx={{
                      backgroundColor:
                        program.probabilityLevel === 'High'
                          ? 'green'
                          : program.probabilityLevel === 'Medium'
                            ? 'yellow'
                            : 'red',
                      color: 'white',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  <Button variant="outlined">More Details</Button>
                </Grid>
              </Grid>
            ))
          : ''}
      </Grid>
    </Box>
  );
};

export default ProgramTable;
