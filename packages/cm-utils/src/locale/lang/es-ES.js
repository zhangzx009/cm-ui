export default {
    name: 'Nombre',
    tel: 'Teléfono',
    save: 'Guardar',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    complete: 'Completado',
    loading: 'Cargando...',
    telEmpty: 'Por favor rellena el teléfono',
    nameEmpty: 'Por favor rellena el nombre',
    confirmDelete: 'Estás seguro de eliminarlo?',
    telInvalid: 'Teléfono inválido',
    cmContactCard: {
        addText: 'Añadir información de contacto'
    },
    cmContactList: {
        addText: 'Añadir nuevo contacto'
    },
    cmPagination: {
        prev: 'Anterior',
        next: 'Siguiente'
    },
    cmPullRefresh: {
        pulling: 'Tira para recargar...',
        loosing: 'Suelta para recargar...'
    },
    cmSubmitBar: {
        label: 'Total：'
    },
    cmCoupon: {
        valid: 'Valido',
        unlimited: 'Ilimitado',
        discount: (discount) => `${discount * 10}% de descuento`,
        condition: (condition) => `Al menos ${condition}`
    },
    cmCouponCell: {
        title: 'Cupón',
        tips: 'Selecciona cupón',
        count: (count) => `You have ${count} coupons`
    },
    cmCouponList: {
        empty: 'Sin cupones',
        exchange: 'Intercambio',
        close: 'Cerrar',
        enable: 'Disponible',
        disabled: 'No disponible',
        placeholder: 'Código del cupón'
    },
    cmAddressEdit: {
        area: 'Área',
        postal: 'Código Postal',
        areaEmpty: 'Por favor selecciona una área de recogida',
        addressEmpty: 'La dirección no puede estar vacia',
        postalEmpty: 'Código postal inválido',
        defaultAddress: 'Establecer como dirección por defecto',
        telPlaceholder: 'Teléfono',
        namePlaceholder: 'Nombre',
        areaPlaceholder: 'Área'
    },
    cmAddressEditDetail: {
        label: 'Dirección',
        placeholder: 'Dirección'
    },
    cmAddressList: {
        add: 'Anadir dirección'
    }
};
