import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Blogs from "./components/blogs/Blogs";
import AllBlogs from "./components/blogs/AllBlogs";
import ParticularBlog from "./components/particularBlog/ParticularBlog";
import Coupons from "./components/coupons/Coupons";
import CouponBrand from "./components/coupons/CouponBrand";
import AllStore from "./components/coupons/AllStore";
import CCountry from "./components/coupons/CCountry";
import Brand from "./components/particularBrand/Brand";
import Contact from "./components/contact/Contact";
import SearchPage from "./components/common/SearchPage";
import Submit from "./components/submit/Submit";
import UserContact from "./components/loggedInUser/UserContact";
import UserInsights from "./components/loggedInUser/UserInsights";
import UserDashboard from "./components/loggedInUser/UserDashboard";
import UserBlogs from "./components/loggedInUser/UserBlogs";
import UserComments from "./components/loggedInUser/UserComments";
import UserProfile from "./components/loggedInUser/UserProfile";
import UserPublish from "./components/loggedInUser/UserPublish";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminBlogs from "./components/admin/AdminBlogs";
import AdminPromoted from "./components/admin/AdminPromoted";
import AdminComments from "./components/admin/AdminComments";
import AdminVerifications from "./components/admin/AdminVerifications";
import AdminCoupons from "./components/admin/AdminCoupons";
import AdminAddCoupons from "./components/admin/AdminAddCoupons";
import AdminAddStore from "./components/admin/AdminAddStore";
import AdminEditCoupons from "./components/admin/AdminEditCoupons";
import AdminCategories from "./components/admin/AdminCategories";
import getUser from "./utils/getUser";
import UserContext from "./utils/userContext";

function App() {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => getUser(setUser, setIsLoading), []);

  return (
    <div className="app-main">
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blogs/allblogs" element={<AllBlogs />} />
            <Route exact path="/particular-blog/:_id" element={<ParticularBlog />} />
            <Route exact path="/coupons" element={<Coupons />} />
            <Route exact path="/coupons/brand" element={<CouponBrand />} />
            <Route exact path="/coupons/stores" element={<AllStore />} />
            <Route exact path="/coupons/:id" element={<CCountry />} />
            <Route exact path="/particular-brand" element={<Brand />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/submit" element={<Submit />} />
            <Route exact path="/user/contact" element={<UserContact />} />
            <Route exact path="/user/dashboard" element={<UserDashboard />} />
            <Route exact path="/user/insights" element={<UserInsights />} />
            <Route exact path="/user/blogs" element={<UserBlogs />} />
            <Route exact path="/user/comments" element={<UserComments />} />
            <Route exact path="/user/profile" element={<UserProfile />} />
            <Route exact path="/user/publish" element={<UserPublish />} />
            <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
            <Route exact path="/admin/blogs" element={<AdminBlogs />} />
            <Route exact path="/admin/promotedblogs" element={<AdminPromoted />} />
            <Route exact path="/admin/comments" element={<AdminComments />} />
            <Route exact path="/admin/coupons" element={<AdminCoupons />} />
            <Route exact path="/searchPage" element={<SearchPage />} />
            <Route
              exact
              path="/admin/addcoupons"
              element={<AdminAddCoupons />}
            />
             <Route
              exact
              path="/admin/addstore"
              element={<AdminAddStore />}
            />
            <Route
              exact
              path="/admin/editcoupons"
              element={<AdminEditCoupons />}
            />
            <Route
              exact
              path="/admin/categories"
              element={<AdminCategories />}
            />
            <Route
              exact
              path="/admin/user-verification"
              element={<AdminVerifications />}
            />
            <Route path="*" element={<Landing />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
