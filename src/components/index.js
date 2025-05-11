import { lazy, } from 'react';

// Lazy-loaded components
const Home = lazy(() => import('./Home/HomePage'));
const About = lazy(() => import('./About/About'));
const BlogOpen = lazy(() => import('./Blogs/BlogOpen.jsx'));
const LandingPage = lazy(() => import('./Blogs/BlogLanding.jsx'));
const Contact = lazy(() => import('./Contact/Contact'));
const Footer = lazy(() => import('./Footer/Footer'));
const Login = lazy(() => import('./Login/Login'));
const Mentorship = lazy(() => import('./Mentorship/Mentorship.jsx'));
const CollegePredictorResult = lazy(() => import('./Predictors/college_predictor_result'));
const Error404 = lazy(() => import('./Error/Error404'));
const CommingSoon = lazy(() => import('./Error/ComingSoon'));
const CommingSoon1 = lazy(() => import('./Error/Commingsoon1'));
const Profile = lazy(() => import('./UserProfile/Profile'));
const PaymentSuccess = lazy(() => import('./Payment/PaymentSuccess'));
const PaymentUnSuccess = lazy(() => import('./Payment/PaymentUnSuccessful'));
const PrivacyPolicy = lazy(() => import('./Policies/PrivacyPolicy.jsx'));
const RefundCancel = lazy(() => import('./Policies/RefundCancel.jsx'));
const Shipping = lazy(() => import('./Policies/Shipping.jsx'));
const TermCondition = lazy(() => import('./Policies/TermCondition.jsx'));
const Cart = lazy(() => import('./Cart/Cart.jsx'));
const Navbar = lazy(() => import('./NavBar/NavBar.jsx'));

// Commented-out Admin imports (lazy-load them if needed in the future)
// const AdminLogin = lazy(() => import("./Admin/Utils/Login.jsx"));
// const AdminHome = lazy(() => import("./Admin/Utils/Home.jsx"));
// const BlogList = lazy(() => import("./Admin/BlogTable/BlogList.jsx"));
// const AddBlog = lazy(() => import("./Admin/Add-Blog/AddBlog.jsx"));
// const CommentList = lazy(() => import("./Admin/CommentTable/CommentList.jsx"));
// const CategoryList = lazy(() => import("./Admin/CategoryList/CategoryList.jsx"));
// const Otp = lazy(() => import("./Admin/OTP/OtpMessage.jsx"));
// const User = lazy(() => import("./Admin/Users/User.jsx"));

export {
  PrivacyPolicy,
  RefundCancel,
  Shipping,
  TermCondition,
  Footer,
  Home,
  About,
  Contact,
  Mentorship,
  Login,
  CollegePredictorResult,
  Error404,
  CommingSoon,
  CommingSoon1,
  Profile,
  PaymentSuccess,
  PaymentUnSuccess,
  LandingPage,
  BlogOpen,
  // AdminLogin,
  // AdminHome,
  // BlogList,
  // AddBlog,
  // CommentList,
  // CategoryList,
  // Otp,
  // User,
  Navbar,
  Cart,
};
