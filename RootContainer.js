import React, { Component } from "react";

import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";

import AppNavigator from "./navigation/AppNavigator";

export default class RootContainer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="default" />
        ) : (
          <StatusBar barStyle="light-content" />
        )}
        <AppNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
