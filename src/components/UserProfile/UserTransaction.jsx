import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const TransactionTable = ({ transactionData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section className="flex flex-col px-4 pt-2 pb-7 my-2 md:my-4 md:ml-4 md:mr-7 text-base leading-5 bg-white rounded-xl shadow-xl w-[98%] mx-1 text-zinc-800">
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          My Transactions
        </Typography>
        {isMobile ? (
          <>
            {transactionData.map((transaction, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{ mb: 2, bgcolor: '#F2F2F2' }}
              >
                <CardContent>
                  <Typography variant="body2">
                    <strong>Reference ID:</strong>{' '}
                    {transaction.razorpay_payment_id}
                  </Typography>

                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mY: 1,
                      mt: 2,
                    }}
                  >
                    <Grid>
                      <Typography variant="body1">
                        <strong>Status:</strong>
                      </Typography>
                      <Typography variant="body2">Successful</Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="body1">
                        <strong>Date/Time:</strong>
                      </Typography>
                      <Typography variant="body2">
                        {' '}
                        {transaction.created_at}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="body1">
                        <strong>Amount:</strong>
                      </Typography>
                      <Typography
                        sx={{
                          display: 'flex',
                          float: 'right',
                          justifyContent: 'end',
                          mY: 1,
                        }}
                        variant="body2"
                      >
                        {transaction.amount}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: 'none' }}>Reference ID</TableCell>
                  <TableCell sx={{ border: 'none' }}>Date/Time</TableCell>
                  <TableCell sx={{ border: 'none' }}>Amount</TableCell>
                  <TableCell sx={{ border: 'none' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionData.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={4} sx={{ p: 0, border: 'none' }}>
                      <Box
                        sx={{
                          mb: 2,
                          bgcolor: '#F2F2F2',
                          borderRadius: '6px',
                          border: 'none',
                        }}
                      >
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{ border: 'none' }}>
                                {transaction.razorpay_payment_id}
                              </TableCell>
                              <TableCell sx={{ border: 'none' }}>
                                {transaction.created_at}
                              </TableCell>
                              <TableCell sx={{ border: 'none' }}>
                                {transaction.amount}
                              </TableCell>
                              <TableCell sx={{ border: 'none' }}>
                                Successfull
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <div className="md:float-end justify-between">
          {/* <Box sx={{mt:2,width:'19rem', justifyContent:'space-between', }}>
        <Button sx={{bgcolor:'#B0B0B0',mr:1, width:'9rem', borderRadius:'12px',
          ':hover':{
            bgcolor:'#4E18CD',
            fontWeight:300
          }
        }} variant="contained">Back</Button>
        <Button sx={{bgcolor:'#4E18CD',ml:0.4,border:'1px solid  #4E18CD', width:'9rem',borderRadius:'12px',
           ':hover':{
            bgcolor:'#FFF',
            color:'#4E18CD', 
            
          }
        }} variant="contained" color="primary">Next</Button>
      </Box> */}
        </div>
      </Box>
    </section>
  );
};

TransactionTable.propTypes = {
  transactionData: PropTypes.arrayOf(
    PropTypes.shape({
      razorpay_payment_id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};
export default TransactionTable;
