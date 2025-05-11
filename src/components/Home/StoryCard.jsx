import React, { act, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, IconButton, MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CustomCardMedia from './components/CustomCardMedia';
import { useDeviceType } from '../../core/hooks/useDeviceType';
import BlogCard from './components/BlogCard';
import useGetData from '../../core/hooks/useGetData';
import MySkeleton from '../../core/components/Skelaton/MySkelaton';
import { GridContainer, GridItem } from '../../core/components/Grid/MyGrid';

const StoryCard = () => {
  const { isMobile, isDesktop } = useDeviceType();
  const [activeStep, setActiveStep] = useState(0);
  const [cachedBlogs, setCachedBlogs] = useState(null)
  const ITEMS_PER_PAGE = 8;

  const { data: blogs, error, isLoading } = useGetData({
    url: 'blog/posts/',
    key: ['blogs', 1],
    params: { page: 1, size: ITEMS_PER_PAGE },
    staleTime: 10000000,
    gcTime: 15000000,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === blogs?.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? blogs?.length - 1 : prevActiveStep - 1
    );
  };

  if (isLoading || !blogs) {
    return (
      <div className="py-20" style={{ backgroundColor: '#e7ecff', width: '100%' }}>
        <div className="md:flex py-8 justify-between ">
          <h1 className="text-[#020D2B] font-manrope font-semibold sm:pl-16 text-2xl leading-10 tracking-wider uppercase">
            OUR BLOG
          </h1>
          <h3 className="text-[#565656] md:max-w-[511px] mb-3 pr-16 font-inter text-sm font-normal leading-7">
            Margdarshan: Expert-curated blogs for JEE, NEET, and college success.
            Stay informed and excel!
          </h3>
        </div>
        <GridContainer cols="grid-cols-1 md:grid-cols-2 xl:grid-cols-3" gap="gap-6">
          {[1, 2, 3].map((item) => (
            <GridItem key={item} xs={1} sm={1} md={1} lg={1} xl={1}>
              <MySkeleton variant="rectangle" width="w-full" height="h-72" borderRadius="rounded-lg" />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    );
  }

  return (
    <div
      className="py-20"
      style={{ backgroundColor: '#e7ecff', width: '100%' }}
    >
      <div className="md:flex py-8 justify-between ">
        <h1 className="text-[#020D2B] font-manrope font-semibold sm:pl-16 text-2xl leading-10 tracking-wider uppercase">
          OUR BLOG
        </h1>
        <h3 className="text-[#565656] md:max-w-[511px] mb-3 pr-16 font-inter text-sm font-normal leading-7">
          Margdarshan: Expert-curated blogs for JEE, NEET, and college success.
          Stay informed and excel!
        </h3>
      </div>
      {!isMobile && isDesktop ? (
        <Grid container alignItems="center" spacing={2}>
          {/* Left arrow button */}
          <Grid item>
            <div
              className={`bg-white rounded-full p-2 cursor-pointer ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              onClick={activeStep === 0 ? null : handleBack}
            >
              <KeyboardArrowLeft />
            </div>
          </Grid>

          <Grid item xs>
            <Grid container spacing={2} justifyContent="center">
              {blogs?.slice(activeStep, activeStep + 3).map((item) => (
                <Grid key={item.id} item xs={4}>
                  <BlogCard
                    blog={item}
                    imageSrc={item.title_image}
                    title={item.title}
                    description={item.meta_description}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right arrow button */}
          <Grid item>
            <div
              className={`bg-white rounded-full p-2 cursor-pointer ${activeStep >= blogs?.length - 3 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              onClick={activeStep >= blogs?.length - 3 ? null : handleNext}
            >
              <KeyboardArrowRight />
            </div>
          </Grid>
        </Grid>
      ) : null}

      {/* Mobile view */}
      {isMobile && blogs && blogs.length > 0 && (
        <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',

              borderRadius: "15px",
              padding: 0
            }}
          >
            <CustomCardMedia
              blog={blogs[activeStep]}
              imageSrc={blogs[activeStep].title_image}
              title={blogs[activeStep].title}
              description={blogs[activeStep].meta_description}
            />

            <MobileStepper
              steps={blogs?.length}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                <IconButton
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === blogs?.length - 1}
                >
                  <KeyboardArrowRight />
                </IconButton>
              }
              backButton={
                <IconButton
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <KeyboardArrowLeft />
                </IconButton>
              }
            />
          </Card>
        </Grid>
      )}
    </div>
  );
};
StoryCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageSrc: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
export default StoryCard;
