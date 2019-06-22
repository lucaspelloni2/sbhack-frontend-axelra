import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import PinScreen from "./Pin";

import DownloadKeyStoreScreen from "./DownloadKeyStoreScreen";
import Welcome from "./WelcomeScreen";
import SeedScreen from "./SeedScreen";
import PinConfirm from "./PinConfirm";
import { LoadingScreen } from "../LoadingScreen";

import { SCREENS } from "./OnBoardingScreens";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

class OnBoarding extends React.Component {
  state = {
    currentScreen: null
  };

  componentDidMount() {
    this.setState({ currentScreen: SCREENS.PIN_CODE_CONFIRM });
  }

  renderScreen() {
    switch (this.state.currentScreen) {
      case SCREENS.PIN_CODE:
        return (
          <PinScreen
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      case SCREENS.DOWNLOAD_KEYSTORE_FILE:
        return <DownloadKeyStoreScreen />;
      case SCREENS.WELCOME:
        return (
          <Welcome
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      case SCREENS.SEED:
        return <SeedScreen />;

      case SCREENS.PIN_CODE_CONFIRM:
        return <PinConfirm />;
      default:
        return <LoadingScreen />;
    }
  }

  render() {
    return <Container flex={1}>{this.renderScreen()}</Container>;
  }
}

export default OnBoarding;
