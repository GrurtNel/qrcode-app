export const userSessionKey = 'user_info'
export const route = {
    customerDashboard: '/admin/customer',
    customerRegister: '/customer/register',
    createProduct: '/customer/product/create',
    rootProduct: '/admin/product',
    createOrder: '/customer/order/create',
    rootOrder: '/admin/order',
}
export const qrcodeTypes = [
    { name: 'QRCode marketing', type: 'qrcode-type1' },
    { name: 'QRCode chống giả loại 1', type: 'qrcode-type2' },
    { name: 'QRCode chống giả loại 2', type: 'qrcode-type3' }
]

export const qrcodeTypesMap = {
    'qrcode-type1':'QRCode marketing',
    'qrcode-type2':'QRCode chống giả loại 1',
    'qrcode-type3':'QRCode chống giả loại 2',
}
