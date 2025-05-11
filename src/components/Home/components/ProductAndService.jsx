/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import CollegePredictorImage from './assets/predictor.png';
import StudyMaterialImage from './assets/study-material.png';
import TestSeriesImage from './assets/test-series.png';
import MentorshipImage from './assets/confrence.png';

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 250,
  [theme.breakpoints.down('sm')]: {
    height: 150,
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const ButtonItem = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1, 0),
  },
}));

const ProductsAndServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Title variant="h4">PRODUCTS & SERVICES</Title>
      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} sm={6}>
          <ImageContainer>
            <Image src={CollegePredictorImage} alt="College Predictor" />
          </ImageContainer>
          <Title variant="h6">College Predictor</Title>
          <Description variant="body1">
            Indecisive about college choices? Use a predictor tool for informed
            decisions based on interests, skills, and preferences. It suggests
            the best fit considering your academic performance. Don't stress,
            let the tool guide you!
          </Description>
          <ButtonContainer>
            <ButtonItem
              variant="contained"
              component={Link}
              to="/mp-dte-predictor"
            >
              MP-DTE Predictor
            </ButtonItem>
            <ButtonItem
              variant="contained"
              component={Link}
              to="/mh-cet-predictor"
            >
              MH-CET Predictor
            </ButtonItem>
            <ButtonItem
              variant="contained"
              component={Link}
              to="/josaa-predictor"
            >
              JosAA Predictor
            </ButtonItem>
          </ButtonContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageContainer>
            <Image src={StudyMaterialImage} alt="Study Material" />
          </ImageContainer>
          <Title variant="h6">Study Material</Title>
          <Description variant="body1">
            Margdarshan is your go-to source for free, high-quality study
            materials. Our diverse range is expertly updated, guaranteeing
            access to the best resources for academic success. Prepare for exams
            or deepen subject understanding with confidence!
          </Description>
          <ButtonContainer>
            <ButtonItem variant="contained" component={Link} to="/mock-paper">
              Mock Paper
            </ButtonItem>
            <ButtonItem variant="contained" component={Link} to="/ncert-books">
              NCERT Books
            </ButtonItem>
            <ButtonItem variant="contained" component={Link} to="/pyqs">
              PYQs
            </ButtonItem>
            <ButtonItem variant="contained" component={Link} to="/formula-book">
              Formula Book
            </ButtonItem>
          </ButtonContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageContainer>
            <Image src={TestSeriesImage} alt="Test Series" />
          </ImageContainer>
          <Title variant="h6">Test Series</Title>
          <Description variant="body1">
            At Margdarshan, we offer test series for exam preparation. Simulate
            real exam conditions, receive personalized feedback, and track
            progress. Start your journey to academic success with us today!
          </Description>
          <ButtonContainer>
            <ButtonItem
              variant="contained"
              component={Link}
              to="/jee-test-series"
            >
              For JEE
            </ButtonItem>
            <ButtonItem
              variant="contained"
              component={Link}
              to="/neet-test-series"
            >
              For NEET
            </ButtonItem>
          </ButtonContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageContainer>
            <Image src={MentorshipImage} alt="Mentorship" />
          </ImageContainer>
          <Title variant="h6">Mentorship</Title>
          <Description variant="body1">
            Unsure about your JEE preparation path? Our mentorship program
            offers personalized guidance for confident decision-making. With
            tailored advice from expert mentors, let us alleviate your worries
            and guide you towards success with clarity and assurance.
          </Description>
          <ButtonContainer>
            <ButtonItem variant="contained" component={Link} to="/mentorship">
              Mentorship
            </ButtonItem>
          </ButtonContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsAndServices;
