import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const AccordionComponent = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <div
        style={{
          paddingLeft: isSmallScreen ? '1rem' : '16rem',
          paddingRight: isSmallScreen ? '1rem' : '16rem',
        }}
      >
        {data.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{ boxShadow: 'none', lineBreak: 'none' }}
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <RemoveCircleOutlineIcon sx={{ color: '#7F56D9' }} />
                ) : (
                  <AddCircleOutlineIcon sx={{ color: '#7F56D9' }} />
                )
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                sx={{
                  color: '#101828', // var(--Gray-900)
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '28px', // 155.556%
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: '#667085', // var(--Gray-500)
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px', // 150%
                }}
              >
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Box>
  );
};
AccordionComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default AccordionComponent;
