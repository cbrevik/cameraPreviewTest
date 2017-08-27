import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Camera from "./Camera";

export default class cameraPreviewTest extends Component {
  render() {
    return <Camera />;
  }
}

AppRegistry.registerComponent("cameraPreviewTest", () => cameraPreviewTest);
