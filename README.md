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

## License
Licensed under [MIT](LICENSE)
