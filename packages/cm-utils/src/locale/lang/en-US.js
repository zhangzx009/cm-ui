export default {
    name: 'Name',
    tel: 'Phone',
    save: 'Save',
    confirm: 'Confirm',
    cancel: 'Cancel',
    delete: 'Delete',
    complete: 'Complete',
    loading: 'Loading...',
    telEmpty: 'Please fill in the tel',
    nameEmpty: 'Please fill in the name',
    confirmDelete: 'Are you sure you want to delete?',
    telInvalid: 'Malformed phone number',
    cmContactCard: {
        addText: 'Add contact info'
    },
    cmContactList: {
        addText: 'Add new contact'
    },
    cmPagination: {
        prev: 'Previous',
        next: 'Next'
    },
    cmPullRefresh: {
        pulling: 'Pull to refresh...',
        loosing: 'Loose to refresh...'
    },
    cmSubmitBar: {
        label: 'Total：'
    },
    cmCoupon: {
        valid: 'Valid',
        unlimited: 'Unlimited',
        discount: (discount) => `${discount * 10}% off`,
        condition: (condition) => `At least ${condition}`
    },
    cmCouponCell: {
        title: 'Coupon',
        tips: 'Select coupon',
        count: (count) => `You have ${count} coupons`
    },
    cmCouponList: {
        empty: 'No coupons',
        exchange: 'Exchange',
        close: 'Close',
        enable: 'Available',
        disabled: 'Unavailable',
        placeholder: 'Coupon code'
    },
    cmAddressEdit: {
        area: 'Area',
        postal: 'Postal',
        areaEmpty: 'Please select a receiving area',
        addressEmpty: 'Address can not be empty',
        postalEmpty: 'Wrong postal code',
        defaultAddress: 'Set as the default address',
        telPlaceholder: 'Phone',
        namePlaceholder: 'Name',
        areaPlaceholder: 'Area'
    },
    cmAddressEditDetail: {
        label: 'Address',
        placeholder: 'Address'
    },
    cmAddressList: {
        add: 'Add new address'
    }
};
