import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import HomePage from '/imports/ui/pages/HomePage.jsx';
import RegisterPage from '/imports/ui/pages/RegisterPage';
import TestPage from '/imports/ui/pages/TestPage';
import StartPage from '/imports/ui/pages/StartPage';




FlowRouter.route('/', {
  name: 'Homepage' ,
  action(params, queryParams) {
      console.log("home route is being called...");
      Meteor.userId() ? mount(HomePage) : mount(StartPage);
      // mount(StartPage);
  }
});

FlowRouter.route('/dashboard', {
  name: 'Homepage' ,
  action(params, queryParams) {
      console.log("home route is being called...");
      Meteor.userId() ? mount(HomePage) : mount(StartPage);
      //mount(HomePage);
  }
});

FlowRouter.route('/help', {
  name: 'Homepage' ,
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(HomePage) : mount(LoginPage);
     mount(TestPage);
     
  }
});

FlowRouter.route('/register', {
  name: 'RegisterPage',
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(RegisterPage);
  }
});

