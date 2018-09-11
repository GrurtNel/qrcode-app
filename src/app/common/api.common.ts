import { environment } from "../../environments/environment";

export const apiURL = {
    //category api
    getCategories: getUrl('admin/category/list'),
    createCategory: getUrl('admin/category/create'),
    updateCategory: getUrl('admin/category/update'),
    deleteCategory: getUrl('admin/category/delete'),
    //post api
    getPosts: getUrl('admin/post/list'),
    createPost: getUrl('admin/post/create'),
    updatePost: getUrl('admin/post/update'),
    uploadThumb: getUrl('admin/post/upload/thumb'),
    deletePost: getUrl('admin/post/delete'),
    approvePost: getUrl('admin/post/approve'),
    notifyPost: getUrl('admin/post/notify'),
    //user api
    getUsers: getUrl('admin/user/list'),
    createUser: getUrl('admin/user/create'),
    deleteUser: getUrl('admin/user/delete'),
    //auth api
    loginByCustomer: getUrl('auth/login'),
    loginByAdmin: getUrl('admin/auth/login'),
    logout: getUrl('auth/logout'),
    //report
    getGeneralReport: getUrl('admin/report/general'),
    registerCustomer: getUrl('guest/register'),
    //customer
    createProduct: getUrl('customer/product/create'),
    getProducts: getUrl('customer/product/list'),
    scanProducts: getUrl('public/product/scan'),
    //order
    createOrder: getUrl('customer/order/create'),
    getOrders: getUrl('customer/order/list'),
    deleteOrder: getUrl('customer/order/delete'),
    //public
    getOrderByID: getUrl('public/order/detail'),
    scanMarketing: getUrl('public/marketing/scan'),
    //admin api
    getAllCustomers: getUrl('admin/customer/list'),
    getAllOrders: getUrl('admin/order/list'),
    deliveryOrder: getUrl('admin/order/delivery'),
    generateCSV: getUrl('admin/order/generate'),
}

function getUrl(endPoint: string) {
    return environment.baseURL + endPoint;
}
