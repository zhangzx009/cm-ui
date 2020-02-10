export default {
    name: 'İsim',
    tel: 'Telefon',
    save: 'Kaydet',
    confirm: 'Onayla',
    cancel: 'İptal',
    delete: 'Sil',
    complete: 'Tamamla',
    loading: 'Yükleniyor...',
    telEmpty: 'Lütfen tel. no giriniz',
    nameEmpty: 'Lütfen isim giriniz',
    confirmDelete: 'Silmek istediğinize emin misiniz?',
    telInvalid: 'Geçersiz tel. numarası',
    cmContactCard: {
        addText: 'Kişi bilgisi ekle'
    },
    cmContactList: {
        addText: 'Yeni kişi ekle'
    },
    cmPagination: {
        prev: 'Önceki',
        next: 'Sonraki'
    },
    cmPullRefresh: {
        pulling: 'Yenilemek için çekin...',
        loosing: 'Yenilemek için bırakın...'
    },
    cmSubmitBar: {
        label: 'Toplam:'
    },
    cmCoupon: {
        valid: 'Geçerli',
        unlimited: 'Sınırsız',
        discount: (discount) => `%${discount * 10} indirim`,
        condition: (condition) => `En az ${condition}`
    },
    cmCouponCell: {
        title: 'Kupon',
        tips: 'Kupon seç',
        count: (count) => `${count} adet teklif var`
    },
    cmCouponList: {
        empty: 'Kupon yok',
        exchange: 'Takas',
        close: 'Kapat',
        enable: 'Mevcut',
        disabled: 'Mevcut değil',
        placeholder: 'Kupon kodu'
    },
    cmAddressEdit: {
        area: 'Alan',
        postal: 'Posta',
        areaEmpty: 'Lütfen alıcı alanını seçin',
        addressEmpty: 'Adres boş olamaz!',
        postalEmpty: 'Yanlış posta kodu',
        defaultAddress: 'Varsayılan adres olarak ayarla',
        telPlaceholder: 'Telefone',
        namePlaceholder: 'İsim',
        areaPlaceholder: 'Alan'
    },
    cmAddressEditDetail: {
        label: 'Adres',
        placeholder: 'Adres'
    },
    cmAddressList: {
        add: 'Yeni adres ekle'
    }
};
