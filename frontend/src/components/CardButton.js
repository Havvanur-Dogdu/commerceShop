import React from 'react';
import paymentRequest from 'react-payment-request-api';
import { Button } from 'react-bootstrap'

const CardButton = ({ show, isSupported, style }) => isSupported
  ? <Button type='button' className='btn-btn-block' onClick={show} style={style}>&emsp; &emsp; &emsp;  &emsp; &emsp;Satın Al &emsp; &emsp; &emsp; &emsp; &nbsp;</Button>
  : <span>Payment request not supported</span>;

export default paymentRequest()(CardButton);