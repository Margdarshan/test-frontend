/* eslint-disable no-unused-vars */
import React, { lazy, useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Card,
  CardContent,
  FormControlLabel,
} from '@mui/material';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CustomInput = lazy(() => import('../../../../core/components/inputBox/CustomInput'));
const CustomSelect = lazy(() => import('../../../../core/components/inputBox/CustomSelect'));
const CustomBox = lazy(() => import('../../../../core/components/box/CustomBox'));
const IOSSwitch = lazy(() => import('../../../../core/components/switch/IOSSwitch'));
import { state, categories, gender } from '../data/state';
import UserLogin from '../../../../../src/components/Login/UserLogin';
import useCreate from '../../../../core/api/hooks/useCreate';
import useAuthStore from '../../../../store/authStore';
import SaveButton from '../../../../core/Element/Button/SaveButton';
import useNotification from '../../../../core/components/Notification/useNotifiaction';

const PredictorForm = () => {
  const { showNotification } = useNotification()
  const [reload, setReload] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jeeRank: '',
      percentile: '',
      category: '',
      gender: '',
      state: '',
      specialAble: false,
    },
    mode: "onChange"
  });

  const jeeRank = useWatch({ control, name: 'jeeRank' });
  const percentile = useWatch({ control, name: 'percentile' });
  const { isAuthenticated, loginRedirectDone, setLoginRedirectDone } = useAuthStore();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navigate = useNavigate();

  const { mutateAsync, isLoading, error } = useCreate('/predictor');
  const onSubmit = async (data) => {
    if (!isAuthenticated) {
      setReload(true);
      localStorage.setItem('formData', JSON.stringify(data));
      localStorage.setItem('currentRoute', '/frontend/collegepredictorresult');
      setIsLoginModalOpen(true);
      return;
    }

    const categoryMapping = {
      'GEN': 'OPEN',
      'OBC': 'OBC',
      'SC': 'SC',
      'ST': 'ST',
      'EWS': 'EWS',
    };

    const modifiedCategory = data.specialAble
      ? `${categoryMapping[data.category]} (PwD)`
      : categoryMapping[data.category];

    const payload = {
      mains_rank: data.jeeRank || 0,
      mains_percentage: data.percentile || 0,
      state: data.state,
      category: modifiedCategory,
      gender: data.gender,
      pwd: data.specialAble ? 'YES' : 'NO',
    };

    try {
      const response = await mutateAsync(payload);

      localStorage.removeItem('formData');
      localStorage.removeItem('currentRoute');

      if (response) {
        console.log('this is th reload', reload)
        if (reload) {
          console.log('this isgg th reload', reload)
          navigate('/frontend/collegepredictorresult', {
            state: {
              receivedData: response.college_list,
              categories: modifiedCategory,
              rank: response.mains_rank || data.jeeRank,
              gender: data.gender,
            },
            replace: true,
          });
        }
        navigate('/frontend/collegepredictorresult', {
          state: {
            receivedData: response.college_list,
            categories: modifiedCategory,
            rank: response.mains_rank || data.jeeRank,
            gender: data.gender,
          },
          replace: true,
        });
      }
    } catch (error) {
      showNotification(error.message || "Oops, Something went wrong!", 'error', 5000);
    }
  };

  // const onSubmit = (data) => {

  //   if (!isAuthenticated) {
  //     setReload(true);
  //     localStorage.setItem('formData', JSON.stringify(data));
  //     localStorage.setItem('currentRoute', '/frontend/collegepredictorresult');
  //     setIsLoginModalOpen(true);
  //     return;
  //   }

  //   const categoryMapping = {
  //     'GEN': 'OPEN',
  //     'OBC': 'OBC',
  //     'SC': 'SC',
  //     'ST': 'ST',
  //     'EWS': 'EWS',
  //   };

  //   const modifiedCategory = data.specialAble
  //     ? `${categoryMapping[data.category]} (PwD)`
  //     : categoryMapping[data.category];

  //   const payload = {
  //     mains_rank: data.jeeRank || 0,
  //     mains_percentage: data.percentile || 0,
  //     state: data.state,
  //     category: modifiedCategory,
  //     gender: data.gender,
  //     pwd: data.specialAble ? 'YES' : 'NO',
  //   };

  //   mutate(payload, {
  //     onSuccess: (response) => {
  //       localStorage.removeItem('formData');
  //       localStorage.removeItem('currentRoute');
  //       if (response) {
  //         console.lo
  //         if (reload) {
  //           navigate('/frontend/collegepredictorresult', {
  //             state: {
  //               receivedData: response.college_list,
  //               categories: modifiedCategory,
  //               rank: response.mains_rank || data.jeeRank,
  //               gender: data.gender,
  //             }, replace: true,
  //           });
  //           // window.location.assign('/frontend/collegepredictorresult');
  //         }
  //         else {
  //           navigate('/frontend/collegepredictorresult', {
  //             state: {
  //               receivedData: response.college_list,
  //               categories: modifiedCategory,
  //               rank: response.mains_rank || data.jeeRank,
  //               gender: data.gender,
  //             }, replace: true,
  //           });
  //         }
  //       }
  //     },
  //     onError: () => {
  //       showNotification(error.message || "Oops, Something went wrong!", 'error', 5000)
  //     },
  //   });
  // };
  useEffect(() => {
    if (isAuthenticated && loginRedirectDone) {
      setLoginRedirectDone(false)
      console.log('this si the redirect', loginRedirectDone)
      const formData = localStorage.getItem('formData');
      if (formData) {
        const parsedData = JSON.parse(formData);
        onSubmit(parsedData);
      }
    }
  }, [isAuthenticated, loginRedirectDone]);

  const handleClosePopup = () => {
    setIsLoginModalOpen(false);
  }


  return (
    <Card
      sx={{
        padding: { xs: '10px', sm: '20px' },
        maxWidth: '100%',
        mx: { xs: '1rem', md: '6rem' },
        boxShadow: 'none',
        borderRadius: 2,
        mb: 8,
      }}
    >
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} pr={{ xs: 0, md: 2.5 }}>
              <CustomBox>
                <Controller
                  name="jeeRank"
                  control={control}
                  rules={{
                    min: { value: 1, message: "Minimum value is 1" },
                  }}
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      type="number"
                      label="JEE Main Rank"
                      placeholder="Enter your Rank"
                      disabled={!!percentile}
                      helperText={errors.jeeRank?.message}
                    />
                  )}
                />
              </CustomBox>
            </Grid>
            <Grid item xs={12} md={6} pl={{ xs: 0, md: 2 }}>
              <CustomBox>
                <Controller
                  name="percentile"
                  control={control}
                  rules={{
                    min: { value: 1, message: "Minimum is 1" },
                    max: { value: 100, message: "Max is 100" },
                  }}
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      type="number"
                      label="JEE Main Percentile"
                      placeholder="Percentile (Optional)"
                      disabled={!!jeeRank}
                      helperText={errors.percentile?.message}
                    />
                  )}
                />
              </CustomBox>
            </Grid>
            <Grid item xs={12} md={6} pr={{ xs: 0, md: 2.5 }}>
              <CustomBox>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Category is Required" }}
                  render={({ field }) => (
                    <CustomSelect
                      {...field}
                      label="Category"
                      options={categories}
                    />
                  )}
                />
                {errors.category && (
                  <p className="text-start text-red-500">{errors.category.message}</p>
                )}
              </CustomBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomBox>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "Gender is Required" }}
                  render={({ field }) => (
                    <CustomSelect
                      {...field}
                      label="Gender"
                      options={gender}
                    />
                  )}
                />
                {errors.gender && (
                  <p className="text-start text-red-500">{errors.gender.message}</p>
                )}
              </CustomBox>
            </Grid>
            <Grid item xs={12} md={6} pr={{ xs: 0, md: 2.5 }}>
              <CustomBox>
                <Controller
                  name="state"
                  control={control}
                  rules={{ required: "Home State is Required" }}
                  render={({ field }) => (
                    <CustomSelect
                      {...field}
                      label="Home State"
                      options={state}
                    />
                  )}
                />
                {errors.state && (
                  <p className="text-start text-red-500">{errors.state.message}</p>
                )}
              </CustomBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomBox>
                <Controller
                  name="specialAble"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <FormControlLabel
                      label="Specially Abled"
                      control={
                        <IOSSwitch
                          checked={value}
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      }
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row-reverse',
                        height: '100%',
                        marginBottom: '15px',
                        ml: { xs: 0, md: 1 },
                        width: '100%',
                      }}
                    />
                  )}
                />
              </CustomBox>
            </Grid>
            <Grid item xs={12} container justifyContent="center" textAlign="center">
              <SaveButton className='px-24' type="submit" variant="contined" disabled={isLoading} loading={isLoading}>
                {isLoading ? 'Predicting...' : 'Predict'}
              </SaveButton>

            </Grid>
          </Grid>
        </form>
      </CardContent>
      {isLoginModalOpen && <UserLogin onClose={handleClosePopup} />}
      {/* {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
          <Button onClick={handleClosePopup}>Close</Button>
        </div>
      )} */}
    </Card >
  );
};

export default PredictorForm;
