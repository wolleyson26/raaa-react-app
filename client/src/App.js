import React, { useEffect } from "react";
import "./App.css";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Redux
import { loadUser } from "./actions/auth";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import HOF from "./pages/HOF";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import HeritageProfile from "./pages/HeritageProfile";
import CommunitySpotlight from "./pages/CommunitySpotlight";
import EventsPage from "./pages/EventsPage";
import Connect from "./pages/Connect";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import LoginUser from "./pages/LoginUser";
import ShowArticle from "./pages/ShowArticle";
import MemberProfile from "./pages/MemberProfile";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./admin/pages/Dashboard";
import Post from "./admin/components/Post";
import Posts from "./admin/components/Posts";
import EditPost from "./admin/components/EditPost";
import ManageCalendar from "./admin/pages/ManageCalendar";
import Users from "./admin/pages/Users";
import EditEvent from "./admin/pages/EditEvent";
import EditDetails from "./pages/EventDetails";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/PrivateRoute";
import ScrollToTop from "./components/routing/ScrollToTop";
import NewEvent from "./admin/components/NewEvent";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/hof" component={HOF} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/news" component={News} />
          <Route exact path="/news/profile" component={HeritageProfile} />
          <Route exact path="/news/spotlight" component={CommunitySpotlight} />
          <Route exact path="/news/events" component={EventsPage} />
          <Route exact path="/news/:id" component={ShowArticle} />
          <Route exact path="/connect" component={Connect} />
          <Route exact path="/getinvolved" component={GetInvolved} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={LoginUser} />
          <Route exact path="/user/:id" component={MemberProfile} />
          <PrivateRoute exact path="/admin" component={Dashboard} />
          <PrivateRoute exact path="/post" component={Post} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/edit/:id" component={EditPost} />
          <Route exact path="/calendar" component={ManageCalendar} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/calendar/new" component={NewEvent} />
          <Route exact path="/calendar/:id" component={EditDetails} />
          <Route exact path="/profile/edit/:id" component={EditProfile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
