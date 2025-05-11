import React from 'react';
import { infoCardsData } from '../data/inforCard';
import { Box, Typography, Card, CardContent, Grid, Stack } from '@mui/material';

const InfoCard = () => {
  return (
    <Stack
      sx={{
        backgroundColor: '#E5F5FF',
        px: { xs: '3rem', sm: '2rem', md: '6rem', lg: '6rem' },
        py: '2rem',
        justifyContent: 'center',
      }}
    >
      <Typography
        textAlign="center"
        mb={4}
        variant="h4"
        sx={{
          color: '#101828',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '30px',
          fontWeight: 600,
          lineHeight: '44px',
          letterSpacing: '-0.6px',
        }}
      >
        What is JEE Main’s College Predictor
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {infoCardsData.map((data, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                maxWidth: 300,
                minHeight: '22.5rem',
                maxHeight: '23rem',
                boxShadow: 'none',
                borderRadius: 4,
                position: 'relative',
                backgroundColor: data.backgroundColor,
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    my: 4,
                    mx: 3,
                  }}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    style={{ width: 30, height: 30 }}
                  />
                </Stack>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: data.titleColor,
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '23px',
                    fontWeight: 600,
                    lineHeight: '35px',
                    maxWidth: '2rem',
                  }}
                  my={3}
                  py={2}
                  gutterBottom
                >
                  {data.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: data.descriptionColor,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    lineHeight: '25px',
                  }}
                  my={3}
                >
                  {data.description}
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: -35,
                    background: `url(${data.cornerImage}) no-repeat`,
                    width: '5.8rem',
                    height: 100,
                    backgroundSize: 'contain',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default InfoCard;
