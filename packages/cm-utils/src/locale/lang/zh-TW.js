export default {
  name: '姓名',
  tel: '電話',
  save: '儲存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  complete: '完成',
  loading: '載入中...',
  telEmpty: '請填寫電話',
  nameEmpty: '請填寫姓名',
  confirmDelete: '確定要刪除嗎',
  telInvalid: '請填寫正確的電話',
  cmContactCard: {
    addText: '新增聯絡人'
  },
  cmContactList: {
    addText: '建立聯絡人'
  },
  cmPagination: {
    prev: '上一頁',
    next: '下一頁'
  },
  cmPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...'
  },
  cmSubmitBar: {
    label: '合計：'
  },
  cmCoupon: {
    valid: '有效期限',
    unlimited: '無使用門檻',
    discount: (discount) => `${discount}折`,
    condition: (condition) => `滿${condition}元可用`
  },
  cmCouponCell: {
    title: '優惠券',
    tips: '使用優惠',
    count: (count) => `${count}張可用`
  },
  cmCouponList: {
    empty: '暫無優惠券',
    exchange: '兌換',
    close: '不使用優惠',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '請輸入優惠代碼'
  },
  cmAddressEdit: {
    area: '地區',
    postal: '郵遞區號',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵遞區號格式不正確',
    defaultAddress: '設為預設收貨地址',
    telPlaceholder: '收貨人手機號碼',
    namePlaceholder: '收貨人姓名',
    areaPlaceholder: '選擇縣 / 市'
  },
  cmAddressEditDetail: {
    label: '詳細地址',
    placeholder: '街道門牌、樓層房號等資訊'
  },
  cmAddressList: {
    add: '新增地址'
  }
};