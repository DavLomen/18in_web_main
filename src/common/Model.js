import store from '@/store'

import router from '@/router'

import axios from './Axios'

import $Dialog from './Dialog'

import i18n,{SetLanguage} from '@/i18n'



const model = {

  GetBackData(callback) {

    const getData = ({

      data

    }) => {

      store.dispatch('UpdateInitData', data.info || '');

      localStorage['UploadApi'] = data.info.setting.up_url;

      callback && callback(data.info);

    }

    axios.post('Common/BackData', '', {

      noLogin: true

    }).then(getData);

  },

  GetLanguage(callback) {

    const getData = ({

      data

    }) => {

      //localStorage['Language'] = data.Language.default_language;

      //let n = localStorage['Language'];

      SetLanguage(data.Language.default_language);

      callback && callback(data.Language);

    };

    axios.post('Common/GetLanguage', '', {

      noLogin: true

    }).then(getData)

  },

  Login(json, callback) {

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        localStorage['MiName'] = data.info.username;

        localStorage['Token'] = data.info.token;

        localStorage['UserId'] = data.info.userid;

        localStorage['Uid'] = data.info.uid;

        store.dispatch('UpdateUserInfo', data.info);

        // if (localStorage['FromPage']) {

          // router.replace(localStorage['FromPage']);

          localStorage.removeItem('FromPage');
          localStorage.removeItem("showIndexDialog");
        // } else {

          router.replace('/dashboard');

        // }

      }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('User/Login', json, {

      noLogin: true

    }).then(getData);

  },

  Logout(callback) {

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        localStorage.removeItem('Token');

        localStorage.removeItem('UserInfo');

        localStorage.removeItem('BankCardList');
        localStorage.removeItem("showIndexDialog");

        store.dispatch('UpdateUserInfo', '');

        store.dispatch('UpdateBankCardList', []);

        this.GetBackData();

        router.replace('/');

      }

      $Dialog.Toast(data.code_dec);

    }

    axios.post('User/Logout').then(getData);

  },

  UserRegister(json, callback) {

    $Dialog.Loading(i18n.t('dialog[5]'));

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        model.Login({

          username: json.username,

          password: json.password

        })

      }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('user/Register', json, {

      noLogin: true

    }).then(getData);

  },

  SmsCode(callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('sms/smsCode', '', {

      noLogin: true

    }).then(getData);

  },

  GetSMSCode(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('sms/sendSMSCode', json, {

      noLogin: true

    }).then(getData);

  },

  GetUserInfo(callback) {

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        store.dispatch('UpdateUserInfo', data.info);

      }

      callback && callback(data);

    }

    axios.post('user/getUserInfo').then(getData);

  },

  SetUserInfo(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        this.GetUserInfo();

      }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('user/setuserinfo', json).then(getData);

  },

  CreateOrder(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        router.push('/user/invest');

        this.GetUserInfo();

      }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('Order/createOrder', json).then(getData);

  },

  OrderList(callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Order/Orderlist').then(getData);

  },

  OrderRecordList(id, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Order/orderRecordList', {

      orderid: id

    }).then(getData);

  },

  FundDetails(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Transaction/FundDetails', json).then(getData);

  },

  GetDrawRecord(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Transaction/getDrawRecord', json).then(getData);

  },

  Draw(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        this.GetUserInfo();

      }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('Transaction/draw', json).then(getData);

  },

  Transfer(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        this.GetUserInfo();

      }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('Transaction/Transfer', json).then(getData);

  },

  AddBankCard(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getData = ({

      data

    }) => {

      if (data.code == 1) {

        this.GetBankCardList()

      }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('Account/AddBankCard', json).then(getData);

  },

  GetBankCardList(callback) {

    const getData = ({

      data

    }) => {

      store.dispatch('UpdateBankCardList', data.data || []);

      callback && callback(data);

    }

    axios.post('Account/getBankCardList').then(getData);

  },

  GetRechargeRecord(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Transaction/getRechargeRecord', json).then(getData);

  },

  GetRechargeType(callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Transaction/getRechargetype', {

      type: 'app'

    }).then(getData);

  },

  RechargeOrder(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getData = ({

      data

    }) => {
      // if (data.code == 1) {
        // router.push('/user/recharge/' + data.orderNumber);
      // }

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('Recharge/newRechargeOrder', json).then(getData);

  },

  GetRechargeInfo(orderId, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Recharge/getRechargeInfo', {

      orderNumber: orderId

    }).then(getData);

  },

  SetOrderInfo(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getData = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('Recharge/setOrderInfo', json).then(getData);

  },

  UploadImg(json, callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('User/UploadImg', json, {

      fromData: true,

      diyApi: false

    }).then(getResponse);

  },

  BuyVip(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('User/userBuyVip', json).then(getResponse);

  },

  PostTask(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('task/publishTask', json).then(getResponse);

  },

  GetTaskList(json, callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('task/getTaskList', json).then(getResponse);

  },

  ReceiveTask(id, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('task/receiveTask', {

      id: id

    }).then(getResponse);

  },
  ReceiveTask1(type, callback) {
    const getResponse = ({

      data

    }) => {
      callback && callback(data);

    }
    axios.post('task/receiveTask', {

      type: type

    }).then(getResponse);

  },

  GetTaskinfo(id, callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('task/getTaskinfo', {

      id: id

    }).then(getResponse);

  },

  GetTaskRecord(json, callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('task/taskOrderlist', json).then(getResponse);

  },

  SubmitTask(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('task/taskOrderSubmit', json).then(getResponse);

  },

  CancelTask(id, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('task/revokeTask', {

      id: id

    }).then(getResponse);

  },

  TaskOrderInfo(id, callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('task/taskorderinfo', {

      order_id: id

    }).then(getResponse);

  },

  AuditTask(json, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('task/taskOrderTrial', json).then(getResponse);

  },

  DailyReport(callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('User/dailyReport').then(getResponse);

  },

  CreditList(callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('user/getUserCreditList').then(getResponse);

  },

  TeamReport(json, callback) {

    $Dialog.Loading(i18n.t('dialog[6]'));

    const getResponse = ({

      data

    }) => {

      $Dialog.Close();

      callback && callback(data);

    }

    axios.post('user/teamReport', json).then(getResponse);

  },

  GetStatisticsInfo(callback) {

    const getResponse = ({

      data

    }) => {

      if (data.code == 1) {

        store.dispatch('UpdateStatisticalData', data.info);

      }

      callback && callback(data);

    }

    axios.post('user/getStatisticsInfo').then(getResponse);

  },

  GetPayBank(json, callback) {

    const getResponse = ({

      data

    }) => {

      callback && callback(data);

    }

    axios.post('Account/GetPayBankCode', json).then(getResponse);

  },

  newLc(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    };

    axios.post("Yuebao/getYuebaoList", json).then(getData)

  },

  newLcTj(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    };

    axios.post("Yuebao/payYuebao", json).then(getData)

  },

  newList(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    };

    axios.post("Yuebaojilu/getYuebaojiluList", json).then(getData)

  },

  MessageList(json,callback) {
    const getData = ({

                       data

                     }) => {

      callback && callback(data);

    };
    axios.post('Inbox/getInboxList',json).then(getData);
  },
  MessageDetail(msgId, callback) {
    $Dialog.Loading(i18n.t('dialog[6]'));
    const getData = ({
                       data
                     }) => {
      if (data.code == 1) {
      }
      $Dialog.Close();
      callback && callback(data);
    }
    let reqData = {"id": msgId}
    axios.post('Inbox/inboxDetail?id=' + msgId, reqData).then(getData);
  },
  HasNewMessage(callback) {
    const getData = ({
                       data
                     }) => {
      store.dispatch('UpdateMessageInfo', data.data || '');
      callback && callback(data);
    }
    axios.post('Inbox/getNewInbox').then(getData);
  },

  yeb(json, callback) {

    const getData = ({

      data

    }) => {

      callback && callback(data);

    };

    axios.post("Yuebao/showMoney", json).then(getData)

  },
  GetGuaGuaList(callback) {
    const getData = ({
                       data
                     }) => {
      if (data.code == 1) {
      }
      callback && callback(data);
    }
    axios.post('Activity/guaguainfo').then(getData);
  },

  GuaGua(json, callback) {
    const getData = ({
                       data
                     }) => {
      callback && callback(data);
    };
    axios.post("Activity/guagua", json).then(getData)
  },

  SetUserAddress(json, callback) {
    $Dialog.Loading(i18n.t('dialog[2]'));
    const getData = ({
                       data
                     }) => {
      if (data.code == 1) {
        this.GetUserInfo();
      }
      callback && callback(data);
      $Dialog.Toast(data.code_dec);
    }
    axios.post('user/setAddress', json).then(getData);

  },
  GetUserAddress(callback) {
    const getData = ({
                       data
                     }) => {
      if (data.code == 1) {
      }
      callback && callback(data);
    }

    axios.post('user/getAddress').then(getData);

  },
  SubmitOrder(id, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

                           data

                         }) => {

      callback && callback(data);

      $Dialog.Toast(data.code_dec);

    }

    axios.post('task/taskOrderPay', {

      id: id

    }).then(getResponse);

  },

  LuckyPriceList(json, callback) {
    $Dialog.Loading(i18n.t('dialog[6]'));
    const getData = ({
                       data
                     }) => {

      callback && callback(data);
      $Dialog.Close();
    }
    axios.post('lucky/prize', json).then(getData);

  },
  LuckyRecordList(json, callback) {

    const getData = ({

                       data

                     }) => {

      callback && callback(data);

    }

    axios.post('lucky/index', json).then(getData);
  },
  LuckyDraw(id, callback) {

    $Dialog.Loading(i18n.t('dialog[2]'));

    const getResponse = ({

                           data

                         }) => {

      callback && callback(data);

      // $Dialog.Close();

    }

    axios.post('lucky/draw', {id:id}).then(getResponse);

  },
  LuckyWinlog(id, callback) {

    $Dialog.Loading(i18n.t('dialog[6]'));

    const getResponse = ({

                           data

                         }) => {

      callback && callback(data);

      $Dialog.Close();

    }

    axios.post('lucky/winlog', {}).then(getResponse);

  },
  redpackInfo(callback) {

    // $Dialog.Loading(i18n.t('dialog[6]'));

    const getResponse = ({

                           data

                         }) => {

      callback && callback(data);

      // $Dialog.Close();

    }

    axios.post('redpack/getInfo', {}).then(getResponse);

  },
  redpackJoin(callback) {

    $Dialog.Loading(i18n.t('dialog[6]'));

    const getResponse = ({

                           data

                         }) => {

      callback && callback(data);


    }

    axios.post('redpack/join', {}).then(getResponse);

  },

  redpackTaskList(callback) {
    $Dialog.Loading(i18n.t('dialog[6]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
      $Dialog.Close();
    }
    axios.post('redpack/taskList', {}).then(getResponse);
  },
  redpackDoTask(id,callback) {

    $Dialog.Loading(i18n.t('dialog[6]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
      $Dialog.Close();
    }
    axios.post('redpack/doTask', {recommend:id}).then(getResponse);
  },
  redpackTaskRecode(callback) {
    $Dialog.Loading(i18n.t('dialog[6]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
      $Dialog.Close();
    }
    axios.post('redpack/taskRecord', {}).then(getResponse);
  },
  redpackWithdraw(callback) {
    $Dialog.Loading(i18n.t('dialog[6]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
    }
    axios.post('redpack/withdraw', {}).then(getResponse);
  },
  redpackWithdrawList(callback) {
    $Dialog.Loading(i18n.t('dialog[6]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
      $Dialog.Close();
    }
    axios.post('redpack/withdrawList', {}).then(getResponse);
  },
  addedBalanceWithdraw(draw_money,callback) {
    $Dialog.Loading(i18n.t('dialog[6]'));
    const getResponse = ({
                           data
                         }) => {
      $Dialog.Close();
      callback && callback(data);
    }
    axios.post('Transaction/addedBalanceWithdraw', {draw_money:draw_money}).then(getResponse);
  },
  ProductList(json, callback) {
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
    }
    axios.post('product/productList', json).then(getResponse);

  },
  ProductDetail(id, callback) {
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
    }
    axios.post('product/detail ', {
      id: id
    }).then(getResponse);

  },
  ProductBuy(json, callback) {
    $Dialog.Loading(i18n.t('dialog[2]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
      $Dialog.Toast(data.code_dec);
    }
    axios.post('product/buy ', json).then(getResponse);

  },
  MyProductList(json, callback) {
    // $Dialog.Loading(i18n.t('dialog[2]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
      // $Dialog.Toast(data.code_dec);
    }
    axios.post('product/getUserProductList', json).then(getResponse);

  },
  RechargeInfo(json, callback) {
    // $Dialog.Loading(i18n.t('dialog[2]'));
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
      // $Dialog.Toast(data.code_dec);
    }
    axios.post('recharge/getRechargeAddress', json).then(getResponse);

  },
  GetRechargeCheck(json,callback) {
    const getData = ({
                       data
                     }) => {
      callback && callback(data);
    }
    axios.post('udun/polling',json).then(getData);

  },
  Reward2basic(json,callback) {
    $Dialog.Loading(i18n.t('dialog[2]'));
    const getData = ({
                       data
                     }) => {
      callback && callback(data);
      $Dialog.Toast(data.code_dec);
    }
    axios.post('user/reward2basic',json).then(getData);

  },
  createTaxe(json, callback) {

    const getData = ({

                       data

                     }) => {

      callback && callback(data);

    };

    axios.post("tax/makePayH5", json).then(getData)

  },
  getUserProductIncome(json, callback) {

    const getData = ({

                       data

                     }) => {

      callback && callback(data);

    };

    axios.post("Product/getUserProductIncome", json).then(getData)

  },
  noticeList(json, callback) {

    const getData = ({

                       data

                     }) => {

      callback && callback(data);

    };

    axios.post("common/noticeList", json).then(getData)

  },
  noticeDetail(json, callback) {

    const getData = ({

                       data

                     }) => {

      callback && callback(data);

    };

    axios.post("common/noticeDetail", json).then(getData)

  },
  makeMessage(json, callback) {
    $Dialog.Loading(i18n.t('dialog[2]'));
    const getData = ({

                       data

                     }) => {

      callback && callback(data);
      $Dialog.Toast(data.code_dec);
    };

    axios.post("UserMessage/makeMessage", json).then(getData)

  },
  googleQrcode(json, callback) {
    $Dialog.Loading(i18n.t('dialog[2]'));
    const getData = ({

                       data

                     }) => {

      callback && callback(data);
      $Dialog.Toast(data.code_dec);
    };

    axios.post("user/googleQrcode", json).then(getData)

  },
  googleBind(json, callback) {
    $Dialog.Loading(i18n.t('dialog[2]'));
    const getData = ({

                       data

                     }) => {

      callback && callback(data);
      $Dialog.Toast(data.code_dec);
    };

    axios.post("user/googleBind", json).then(getData)

  },
  googleUnbind(json, callback) {
    $Dialog.Loading(i18n.t('dialog[2]'));
    const getData = ({

                       data

                     }) => {

      callback && callback(data);
      $Dialog.Toast(data.code_dec);
    };

    axios.post("user/googleUnbind", json).then(getData)

  },
  merged(symbol, callback) {
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
    }
    axios.get('market/detail/merged?symbol='+symbol, {
      diyApi: true
    }).then(getResponse);
  },

  MYCOUPON(json, callback) {
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
    }
    axios.post('coupon/my_coupon',json).then(getResponse);

  },
  getCode1(data, callback) {
    const getResponse = ({
                           data
                         }) => {
      callback && callback(data);
    }
    axios.get('Account/code1?code_rand='+data, {}).then(getResponse);
  },
}



export default model
