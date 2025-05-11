import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './App.css';
import axios from 'axios';
import Loading from './core/components/Loading/Loading.jsx';
// import { AuthProvider } from './context/AuthContext.js';
import ProtectedRoute from './components/Admin/ProtectedRoute.js';
import Textbook from './components/TextBook/Textbook.jsx';
import Compbooks from './components/CompBooks/Compbooks.jsx';
import Previousyear from './components/Previousyear/Previousyear.jsx';
import Revision from './components/Revisionnotes/Revision.jsx';
import AdminLayout from './components/Admin/utlis/AdminLayout';
// import BlogPostDetails from './components/Admin/Blog-editor/components/BlogPostDetails';
import BlogPage from './components/Admin/Blog-editor/components/BlogPage.jsx';
import BlogEditor from './components/Admin/Blog-editor/components/BlogEditor.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import NotificationProvider from './core/components/Notification/NotificationProvider.jsx';
import NewLatterUserList from './components/Admin/New-Latter/NewLatterUserList.jsx';
import AuthCallbackHandler from './components/Login/Components/GoogleAuthCallBack.jsx';
import ErrorTrigger from './components/Error/ErrorTrigger.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ComingSoon from './components/Error/ComingSoon';
import ComingSoon1 from './components/Error/Commingsoon1';
import AddBlog from './components/Admin/Add-Blog/AddBlog.jsx';

// const CareerPage = lazy(() => import('./components/career/Career.jsx'));
const Home = lazy(() => import('./components/Home/HomePage'));
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Mentorship = lazy(() => import('./components/Mentorship/Mentorship.jsx'));
const Login = lazy(() => import('./components/Login/UserLogin.jsx'));
const Error404 = lazy(() => import('./components/Error/Error404'));
const CommingSoon = lazy(() => import('./components/Error/ComingSoon'));
const CommingSoon1 = lazy(() => import('./components/Error/Commingsoon1'));
const Profile = lazy(() => import('./components/UserProfile/Profile'));
const PaymentSuccess = lazy(() => import('./components/Payment/PaymentSuccess'));
const PaymentUnSuccess = lazy(() => import('./components/Payment/PaymentUnSuccessful'));
const PrivacyPolicy = lazy(() => import('./components/Policies/PrivacyPolicy.jsx'));
const RefundCancel = lazy(() => import('./components/Policies/RefundCancel.jsx'));
const Shipping = lazy(() => import('./components/Policies/Shipping.jsx'));
const TermCondition = lazy(() => import('./components/Policies/TermCondition.jsx'));
const LandingPage = lazy(() => import('./components/Blogs/BlogLanding.jsx'));
const BlogOpen = lazy(() => import('./components/Blogs/BlogOpen.jsx'));
const Cart = lazy(() => import('./components/Cart/Cart.jsx'));
const CollegePredictor = lazy(() => import('./features/college-predictor/jee-predictor/CollegePredictor.jsx'));
const CollegePredictorResult = lazy(() => import('./features/college-predictor/jee-predictor/predicotor-component/CollegePredictorResult'));
const StudyMaterial = lazy(() => import('./components/StudyMaterial/StudyMaterial.jsx'));
const PersonalDetails = lazy(() => import('./components/Login/PersonalDetails.jsx'));
const BlogList = lazy(() => import('./components/Admin/Blogs/BlogList.jsx'));
const CommentList = lazy(() => import('./components/Admin/Comments/CommentList.jsx'));
const CategoryList = lazy(() => import('./components/Admin/Category/CategoryList.jsx'));
const OtpMessage = lazy(() => import('./components/Admin/OTP/OtpMessage.jsx'));
const AdminLogin = lazy(() => import('./components/Admin/utlis/Login.jsx'));
const User = lazy(() => import('./components/Admin/Users/User.jsx'));
const StudyMaterialAdmin = lazy(() => import('./components/Admin/Study-material/StudyMaterialAdminPage.jsx'))
const StudyMaterialCategoryAdmin = lazy(() => import('./components/Admin/Study-material/CategoryListPage.jsx'))
const StudyMaterialSubcategoryAdmin = lazy(() => import('./components/Admin/Study-material/SubcategoryListPage.jsx'))
const StudyMaterialSubcategoryMaterialAdmin = lazy(() => import('./components/Admin/Study-material/SubcategoryMaterialPage.jsx'))

// const url = process.env.REACT_APP_BACKEND_URL;
// axios.defaults.baseURL = url;
const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
        <Route path="/iit-jee-mentorship" element={<Suspense fallback={<Loading />}><Mentorship /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
        <Route path="/career-page" element={<Suspense fallback={<Loading />}> <CommingSoon /></Suspense>} />  {/* <CareerPage /> */}
        <Route path="/blog" element={<Suspense fallback={<Loading />}> <LandingPage /></Suspense>} />
        <Route path="/blog/:blog_title/:id" element={<Suspense fallback={<Loading />}><BlogOpen /> </Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
        <Route path="/google-auth-success" element={<AuthCallbackHandler />} />
        <Route path="/privacypolicy" element={<Suspense fallback={<Loading />}><PrivacyPolicy /></Suspense>} />
        <Route path="/refund-cancel" element={<Suspense fallback={<Loading />}><RefundCancel /></Suspense>} />
        <Route path="/shipping" element={<Suspense fallback={<Loading />}><Shipping /></Suspense>} />
        <Route path="/terms-and-conditions" element={<Suspense fallback={<Loading />}><TermCondition /></Suspense>} />
        <Route path="/jee-main/collegepredictor" element={<Suspense fallback={<Loading />}><CollegePredictor /></Suspense>} />
        <Route path="/collegepredictorresult" element={<Suspense fallback={<Loading />}><CollegePredictorResult /></Suspense>} />
        <Route path="/Error404" element={<Suspense fallback={<Loading />}><Error404 /></Suspense>} />
        <Route path="/ErrorTrigger" element={<Suspense fallback={<Loading />}><ErrorTrigger /></Suspense>} />
        <Route path="/commingsoon1" element={<Suspense fallback={<Loading />}><CommingSoon1 /></Suspense>} />
        <Route path="/commingsoon" element={<Suspense fallback={<Loading />}><CommingSoon /></Suspense>} />
        <Route path="/PersonalDetails" element={<Suspense fallback={<Loading />}><PersonalDetails /></Suspense>} />
        <Route path="/payment-success" element={<Suspense fallback={<Loading />}><PaymentSuccess /></Suspense>} />
        <Route path="/payment-unsuccess" element={<Suspense fallback={<Loading />}><PaymentUnSuccess /></Suspense>} />
        <Route path="/cart" element={<Suspense fallback={<Loading />}><Cart /></Suspense>} />
        <Route path="/study-material" element={<Suspense fallback={<Loading />}><StudyMaterial /></Suspense>} />
        <Route path="/text-books" element={<Suspense fallback={<Loading />}><Textbook /></Suspense>} />
        <Route path='/comp-books' element={<Suspense fallback={<Loading />}><Compbooks /></Suspense>} />
        <Route path='/previous-year' element={<Suspense fallback={<Loading />}><Previousyear /></Suspense>} />
        <Route path='/revision-notes' element={<Suspense fallback={<Loading />}><Revision /></Suspense>} />
        <Route path="/user-profile" element={<Suspense fallback={<Loading />}><Profile /></Suspense>} />
        <Route path="/add" element={<Suspense fallback={<Loading />}><AddBlog /></Suspense>} />

      </Route>

      <Route path="/admin" element={<ProtectedRoute> <AdminLayout /> </ProtectedRoute>}>
        <Route path="blog-list" element={<Suspense fallback={<Loading />}><BlogList /></Suspense>} />
        <Route path="blog-comment" element={<Suspense fallback={<Loading />}><CommentList /></Suspense>} />
        <Route path="blog-category" element={<Suspense fallback={<Loading />}><CategoryList /></Suspense>} />
        <Route path="blog-new" element={<Suspense fallback={<Loading />}><BlogEditor /></Suspense>} />
        <Route path="blog-edit" element={<Suspense fallback={<Loading />}><BlogEditor /></Suspense>} />
        <Route path="otp-message" element={<Suspense fallback={<Loading />}><OtpMessage /></Suspense>} />
        <Route path="users" element={<Suspense fallback={<Loading />}><User /></Suspense>} />
        <Route path="blogpage" element={<BlogPage />} />
        {/* <Route path="posts/:id" element={<BlogPostDetails />} /> */}
        <Route path="news-letter" element={<NewLatterUserList />} />
        <Route path="study-material" element={<Suspense fallback={<Loading />}><StudyMaterialAdmin /></Suspense>} />
        <Route path="study-material/categories" element={<Suspense fallback={<Loading />}><StudyMaterialCategoryAdmin /></Suspense>} />
        <Route path="study-material/categories/subcategories" element={<Suspense fallback={<Loading />}><StudyMaterialSubcategoryAdmin /></Suspense>} />
        <Route path="study-material/categories/subcategories/material" element={<Suspense fallback={<Loading />}><StudyMaterialSubcategoryMaterialAdmin /></Suspense>} />
      </Route>

      <Route path="/admin/login" element={<Suspense fallback={<Loading />}> <AdminLogin /></Suspense>} />

      <Route path="*" element={<Navigate to="/Error404" replace />} />
    </>
  )
);
// new
// const clientId = "420319298678-57npukrud7psrhs6ch2vj5uueuu2gjdb.apps.googleusercontent.com "
//old
const clientId = "522145841821-3h2gh859r9vb1vcr31acj00v7dm4rgi8.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);
