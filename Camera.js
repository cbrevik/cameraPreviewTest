"use strict";
import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  ActivityIndicator
} from "react-native";
import Camera from "react-native-camera";

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  camera: { flex: 1, alignItems: "center" }
});

export default class CameraTest extends Component {
  camera = null;
  state = {
    modalVisible: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.modalVisible} onRequestClose={() => {}}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Overlaying modal</Text>
            <ActivityIndicator animating={true} size="large" />
            <Button
              title="Toggle modal"
              onPress={() => this.setState({ modalVisible: false })}
            />
          </View>
        </Modal>
        <Camera
          ref={cam => (this.camera = cam)}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
        >
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <Button title="Start" onPress={() => this.camera.startPreview()} />
            <Button title="Stop" onPress={() => this.camera.stopPreview()} />
            <Button
              title="Toggle modal"
              onPress={() => this.setState({ modalVisible: true })}
            />
          </View>
        </Camera>
      </View>
    );
  }
}
