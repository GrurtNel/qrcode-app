export const userSessionKey = 'user_info'
export const route = {
    customerDashboard: '/customer',
    customerRegister: '/customer/register',
    createProduct: '/customer/product/create',
    rootProduct: '/customer/product',
    createOrder: '/customer/order/create',
    rootOrder: '/customer/order',
}
export const qrcodeTypes = [
    { name: 'QRCode marketing', type: 'qrcode-type1' },
    { name: 'QRCode truy xuất nguồn gốc', type: 'qrcode-type2' },
    { name: 'QRCode chống giả', type: 'qrcode-type3' }
]

export const qrcodeTypesMap = {
    'qrcode-type1':'QRCode marketing',
    'qrcode-type2':'QRCode truy xuất nguồn gốc',
    'qrcode-type3':'QRCode chống giả',
}
