import { Box, Stack, Typography } from '@mui/material';
import React, { Suspense, lazy } from 'react';
const AccordionComponent = lazy(() => import('./AccordionComponent'));
import { accordionData } from '../data/accordionData';

const PredictorFaq = () => {
  return (
    <Box>
      <Stack textAlign="center">
        <Typography
          variant="h4"
          my={2}
          sx={{
            color: '#101828', // var(--Gray-900)
            fontFamily: 'Manrope, sans-serif',
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '44px', // 146.667%
            letterSpacing: '-0.6px',
          }}
        >
          Frequently asked questions
        </Typography>
        <Typography
          variant="h5"
          mb={3}
          sx={{
            color: '#667085', // var(--Gray-500)
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '30px', // 150%
          }}
        >
          Everything you need to know about the product and billing.
        </Typography>
      </Stack>
      <Stack>
      <Suspense fallback={<div>Loading...</div>}>
        <AccordionComponent data={accordionData} />
        </Suspense>
      </Stack>
    </Box>
  );
};

export default PredictorFaq;
