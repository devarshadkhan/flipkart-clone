import React, { Component } from 'react'
import $  from "jquery"
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
export default class Pagecount extends Component {
  render() {
   
    return (
      <>
         
         <Stack spacing={2}>
      {/* <Pagination count={10} /> */}
      <Pagination count={10} color="primary" />
      {/* <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled /> */}
    </Stack>
      </>
    )
  }
}
