
const details = {
 
  total: {
    label: 'Total due',
    amount: { currency: 'USD', value : '55.00' },
  },
};

const getConfig = () => ({
  methodData: [{
    supportedMethods: ['basic-card'],
    data: {
      supportedNetworks: ['visa', 'mastercard', 'diners'],
    },
  }],
  details: details,
  options: {
    requestShipping: true,
    requestPayerEmail: true,
    requestPayerPhone: true,
  },

  /* tslint:disable-next-line:no-console */
  onShowFail: (error) => console.log('Error', error),

  
}) ;

export default getConfig;