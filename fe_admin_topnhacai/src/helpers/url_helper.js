//permission

export const GET_ALL_PERMISSION = "/api/permission/getPermissions"

//Roles
export const GET_ALL_ROLES = "/api/roles/getRoles"
export const EDIT_ROLE_PERMISSION = "/api/roles/editRolePermission"
export const ADD_NEW_ROLES = "/api/roles/addNewRole"
export const DELETE_ROLES = "/api/roles/deleteRole"
export const UPDATE_ROLES = "/api/roles/editRole"

//REGISTER
export const POST_FAKE_REGISTER = "/auth/signup";

//LOGIN
export const POST_FAKE_LOGIN = "/auth/signin";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

//login
export const POST_AUTHENTICATE = "/api/users/authenticate";

//BUNNY 
export const URL_IMAGE_BUNNY = "https://cdn.topnhacai.today/";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/api/user";


//user
export const GET_USERS = "/api/users";
// export const ADD_USERS = "/signup";
// export const DELETE_USER = "/api/users/delete";
export const SEARCH_USER = "/api/users/user/search";

export const GET_USER_PERMISSION = "/api/users/user/permission";
// faqs
export const GET_FAQS = "/api/faqs";

// dealers
export const GET_DEALERS = "/api/dealers";

// dealer info
export const GET_DEALER_INFO = "/api/dealerInfor";

export const GET_DEALER_PAYMENT = "/api/dealerPayment";

export const GET_DEALER_PROMOTION = "/api/dealerPromotion";

export const GET_DEALER_SERVICE = "/api/dealerService";

export const GET_POSTS = "/api/posts";

export const GET_SCHEMAS = "/api/schemas";
export const GET_TAXONOMYS = "/api/taxonomy";

export const GET_PAGES = "/api/pages";

export const GET_TAXANOMY = "/api/taxanomy";


//Links
export const GET_LINKS = '/api/linkFooters'

//Google index
export const GOOGLEINDEX = 'api/google/index'   //param
export const GOOGLEBATCHINDEX = 'api/google/batchIndex' // body

//Banner
export const BANNER = 'api/banners'

//Bing index
export const BINGINDEX = 'api/bing/index'

//Google Analytics
export const GGANALYTICS = 'api/ggAnalytics'