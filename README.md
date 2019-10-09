# Toyyibpay Javascript SDK

## Install
```
npm install --save toyyibpay-js-sdk
```

## Example
```js
import ToyyibPay from 'toyyibpay-js-sdk'

const toyyibpay = new ToyyibPay('api uri', 'secret key');

toyyibpay.createCategory({
  catname: 'demo',
  catdescription: 'description...',
});

```

## Documentation

### Constructor

* API URL: string
* secret key: string

```new ToyyibPay('api uri', 'secret key');```

### Methods

* catname: string
* catdescription: string

```createCategory({ category params })```

* categoryCode: string
* billName: string
* billDescription: string
* billPriceSetting: number
* billPayorInfo: number
* billAmount: number
* billReturnUrl: string
* billCallbackUrl: string
* billExternalReferenceNo: string
* billTo: string
* billEmail: string
* billPhone: string
* billSplitPayment: number
* billSplitPaymentArgs: any
* billPaymentChannel?: number

```createBill({ bill params })```

* billCode: string
* billExternalReferenceNo: string

```getBillTransactions(transaction params)```

## License
Licensed under [MIT](LICENSE.md)
