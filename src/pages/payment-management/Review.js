import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import civic from '../../assets/images/civic.jpg'

const products = [
  { 
    name: 'Honda Civic',
    desc: '22-06-2022',
    price: '$30.99',
  },
];

const addresses = ['5415 Victoria Road', 'Halifax', 'Nova Scotia', 'B3h 2k5', 'Canada'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr Sidharth Mahant' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-5611' },
  { name: 'Expiry date', detail: '09/2022' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <img src={civic} alt="car" width={200}/>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $30.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Billing
          </Typography>
          <Typography gutterBottom>Sidharth Mahant</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}