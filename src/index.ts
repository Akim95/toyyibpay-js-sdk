import axios from 'axios';
import qs from 'qs';

interface Category {
  catname: string;
  catdescription: string;
}

interface Bill {
  categoryCode: string;
  billName: string;
  billDescription: string;
  billPriceSetting: number;
  billPayorInfo: number;
  billAmount: number;
  billReturnUrl: string;
  billCallbackUrl: string;
  billExternalReferenceNo: string;
  billTo: string;
  billEmail: string;
  billPhone: string;
  billSplitPayment: number;
  billSplitPaymentArgs: any;
  billPaymentChannel?: number;
}

interface CategoryResult {
  CategoryCode: string;
}

interface BillResult {
  BillCode: string;
}

interface BillTransactionsResult {
  billpaymentStatus: string;
  billpaymentAmount: string;
  billpaymentInvoiceNo: string;
}

class ToyyibPay {
  uri: string;
  userSecretKey: string;

  constructor(uri: string, userSecretKey: string) {
    this.uri = uri;
    this.userSecretKey = userSecretKey;
  }

  /**
  * create a bill category
  * @param catname: string
  * @param catdescription: string
  * @return {"CategoryCode":"j0tzqhka"}
  */
  async createCategory(category: Category): Promise<CategoryResult> {
    const result = await axios({
      method: 'POST',
      url: this.uri + '/createCategory',
      data: qs.stringify({ userSecretKey: this.userSecretKey, ...category }),
    });

    return result.data[0];
  }

  /**
  * create a bill
  * @return {"BillCode":"j0tzqhka"}
  */
  async createBill(bill: Bill): Promise<BillResult> {
    const result = await axios({
      method: 'POST',
      url: this.uri + '/createBill',
      data: qs.stringify({ userSecretKey: this.userSecretKey, ...bill }),
    });

    return result.data[0];
  }

  /**
  * get all bill transactions
  */
  async getBillTransactions(
    billCode: string,
    billExternalReferenceNo: string
  ): Promise<BillTransactionsResult[]> {
    const results = await axios({
      method: 'POST',
      url: this.uri + '/getBillTransactions',
      data: qs.stringify({ billCode, billExternalReferenceNo }),
    });

    return results.data
  }
}

export default ToyyibPay;
