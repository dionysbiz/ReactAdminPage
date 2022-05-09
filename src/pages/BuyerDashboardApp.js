import React, { useState, useEffect, useContext } from 'react';

import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
// sections
import {
  BuyRecordsUpdate,
} from '../sections/@dashboard/app';
// util
import { queryOrdersByOrderer } from '../utils/awsClient'


// ----------------------------------------------------------------------


export default function BuyerDashboardApp() {
  const [orderList, setOrderList] = React.useState([]);
  
  let qR=[];
  let usr;
  function init() {
    console.log('init')
    const acc = window.ethereum.request({ method: 'eth_requestAccounts' });
    acc.then((result) => {
      usr= result[0]
      console.log(usr)
    }).then(()=>queryDyDb(usr))
    
  }

  function queryDyDb(addr) {
    queryOrdersByOrderer(addr).then((queryResult) => {
      console.log('Query the DB')
      qR=queryResult.Items
      setOrderList(qR)
    })
  }
  
  

  useEffect(()=> {
    console.log('useEffect')
    init()
  }, []);
  

  
  
  
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={8}>
            <BuyRecordsUpdate
              title="Latest Orders"
              list={orderList.map((_, index) => ({
                id: _.order_id,
                title: _.product_name.S,
                buyerName: _.buyer_name.S,
                buyerEmail: _.buyer_email.S,
                buyerAddr1: _.delivery_addr1.S,
                buyerAddr2: _.delivery_addr2.S,
                currency: _.currencyName.S,
                price: _.product_price.N,
                image: _.product_cover.S,
                chain: _.chain.S,
                txHash: _.transactionHash.S,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
