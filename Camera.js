"use strict";
import React, { Component, PropTypes } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Camera from "react-native-camera";

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  camera: { flex: 1, alignItems: "center" }
});

export default class CameraTest extends Component {
  camera = null;

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={cam => (this.camera = cam)}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
        >
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <Button title="Start" onPress={() => this.camera.startPreview()} />
            <Button title="Stop" onPress={() => this.camera.stopPreview()} />
          </View>
        </Camera>
      </View>
    );
  }
}
