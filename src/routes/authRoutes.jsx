import { createBrowserRouter, Navigate } from "react-router-dom";
import Error from "../components/Error/Error404";
import MainLayout from "../core/components/Layout/MainLayout";
import Mentorship from "../components/Mentorship/Mentorship";
import About from "../components/About/About";
import LandingPage from "../components/Blogs/BlogLanding";
import BlogOpen from "../components/Blogs/BlogOpen";
import Contact from "../components/Contact/Contact";
import PrivacyPolicy from "../components/Policies/PrivacyPolicy";
import RefundCancel from "../components/Policies/RefundCancel";
import Shipping from "../components/Policies/Shipping";
import TermCondition from "../components/Policies/TermCondition";
import CollegePredictor from "../features/college-predictor/jee-predictor/CollegePredictor";
import CollegePredictorResult from "../features/college-predictor/jee-predictor/predicotor-component/CollegePredictorResult";
import PersonalDetails from "../components/Login/PersonalDetails";
import PaymentSuccess from "../components/Payment/PaymentSuccess";
import PaymentUnSuccess from "../components/Payment/PaymentUnSuccessful";
import Cart from "../components/Cart/Cart";
import StudyMaterial from "../components/StudyMaterial/StudyMaterial";
import Textbook from "../components/TextBook/Textbook";
import Compbooks from "../components/CompBooks/Compbooks";
import Previousyear from "../components/Previousyear/Previousyear";
import Revision from "../components/Revisionnotes/Revision";
import Profile from "../components/UserProfile/Profile";
import ProtectedRoute from "../components/Admin/ProtectedRoute";
import AdminLayout from "../components/Admin/utlis/AdminLayout";
import BlogList from "../components/Admin/Blogs/BlogList";
import BlogComment from "../components/Blogs/blog-component/BlogComment";
import CategoryList from "../components/Admin/Category/CategoryList";
import BlogEditor from "../components/Admin/Blog-editor/components/BlogEditor";
import OtpMessage from "../components/Admin/OTP/OtpMessage";
import User from "../components/Admin/Users/User";
import BlogPage from "../components/Admin/Blog-editor/components/BlogPage";
import BlogPostDetails from "../components/Admin/Blog-editor/components/BlogPostDetails";
import AdminLogin from "../components/Admin/utlis/Login";
import Login from "../components/Login/Login";


export const authRoutes = createBrowserRouter([
  {
    path: '/frontend',
    errorElement: <Error />,
    element: <MainLayout />,
    children: [
      {
        path: 'login',
        errorElement: <Error />,
        element: <Login />
      },
      {
        path: 'mentorship',
        errorElement: <Error />,
        element: <Mentorship />
      },
      {
        path: 'about',
        errorElement: <Error />,
        element: <About />
      },
      {
        path: 'blog',
        errorElement: <Error />,
        element: <LandingPage />,
      },
      {
        path: 'blog/:blog_title',
        errorElement: <Error />,
        element: <BlogOpen />
      },
      {
        path: 'contact',
        errorElement: <Error />,
        element: <Contact />
      },
      {
        path: 'privacypolicy',
        errorElement: <Error />,
        element: <PrivacyPolicy />
      },
      {
        path: 'refund-cancel',
        errorElement: <Error />,
        element: <RefundCancel />,
      },
      {
        path: 'shipping',
        errorElement: <Error />,
        element: <Shipping />
      },
      {
        path: 'terms-and-conditions',
        errorElement: <Error />,
        element: <TermCondition />
      },
      {
        path: 'collegepredictor',
        errorElement: <Error />,
        element: <CollegePredictor />
      },
      {
        path: 'collegepredictorresult',
        errorElement: <Error />,
        element: <CollegePredictorResult />,
      },
      {
        path: 'PersonalDetails',
        errorElement: <Error />,
        element: <PersonalDetails />
      },
      {
        path: 'payment-success',
        errorElement: <Error />,
        element: <PaymentSuccess />,
      },
      {
        path: 'payment-unsuccess',
        errorElement: <Error />,
        element: <PaymentUnSuccess />
      },
      {
        path: 'cart',
        errorElement: <Error />,
        element: <Cart />
      },
      {
        path: 'study-material',
        errorElement: <Error />,
        element: <StudyMaterial />
      },
      {
        path: 'text-books',
        errorElement: <Error />,
        element: <Textbook />,
      },
      {
        path: 'comp-books',
        errorElement: <Error />,
        element: <Compbooks />
      },
      {
        path: 'previous-year',
        errorElement: <Error />,
        element: <Previousyear />,
      },
      {
        path: 'revision-notes',
        errorElement: <Error />,
        element: <Revision />
      },
      {
        path: 'user-profile',
        errorElement: <Error />,
        element: <Profile />
      },
      //Admin Routes 
      {
        path: 'admin',
        errorElement: <Error />,
        element: <ProtectedRoute />,
        children: [
          {
            path: '',
            errorElement: <Error />,
            element: <AdminLayout />,
          },
          {
            path: 'blog-list',
            errorElement: <Error />,
            element: <BlogList />
          },
          {
            path: 'blog-comment',
            errorElement: <Error />,
            element: <BlogComment />,
          },
          {
            path: 'blog-category',
            errorElement: <Error />,
            element: <CategoryList />
          },
          {
            path: 'blog-new',
            errorElement: <Error />,
            element: <BlogEditor />
          },
          {
            path: 'otp-message',
            errorElement: <Error />,
            element: <OtpMessage />,
          },
          {
            path: 'users',
            errorElement: <Error />,
            element: <User />
          },
          {
            path: 'blogpage',
            errorElement: <Error />,
            element: <BlogPage />,
          },
          {
            path: 'posts/:id',
            errorElement: <Error />,
            element: <BlogPostDetails />
          },
        ],
      },
      {
        path: 'admin/login',
        errorElement: <Error />,
        element: <AdminLogin />
      }
    ]
  },

])