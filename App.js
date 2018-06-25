//@flow
//khong dung nua
import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';
// import Network from './app/api/Network';
import { AuthenticationStack } from './app/routes/AuthenticationStack';
import ScreenWelcome from './app/screen/ScreenWelcome'
export default class App extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      select:false,
      isStarted:false,
    };
  };

  componentDidMount() {
    // this.unsubscribe = AppStorage.subscribe((state) => {
    //   let that=this;
    //   switch (state.event) {
    //     case "SAVE_TOKEN":
    //       UsersApi.getUserProfile(data => {
    //         UsersApi.getUserDevices((data: Array<Device>) => {
    //           AppStorage.postEvent("SAVE_USER_DEVICES", data);
    //           let devices = data.map((device) => {
    //             return device.id;
    //           });

    //           let devicesId: string = devices.join(",");
    //           Socket.OpenCommonWS(devicesId);
    //           this.setState({ select: "loaded" });
    //         })
    //       });
    //   }
    // });
    this.GetToken();
    setTimeout(() => {this.setState({isStarted: true})}, 2000);
  }
  
  GetToken() {
    try {
      AsyncStorage.getItem('@token:key').then((access_token) => {
        if (access_token !== null) {
          console.log("token got: " + access_token);
          // Network.token = access_token;
          // AppStorage.postEvent("SAVE_TOKEN", access_token);
          this.setState({ select: "logged" });
        } else {

        }
      });
    } catch (error) {
      console.log("cannot get token");
    }
  }
  onNavigationStateChange = (prevState: any, currentState: any, action: any) => {
    if (action.type == "Navigation/NAVIGATE") {
      // AppStorage.postEvent("SET_FOCUSED_SCREEN", action.routeName);
    }
  };
  render() {
    const Layout = AuthenticationStack(this.state.select);
    return this.state.isStarted
    ?<Layout onNavigationStateChange={(prevState, currentState, action) => { this.onNavigationStateChange(prevState, currentState, action) }} />
    :<ScreenWelcome/>;
  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }
}