import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import MainScreenHeader from "../components/MainScreenHeader";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header
          placement="left"
          leftComponent={
            <Icon
              color="white"
              underlayColor="transparent"
              name="menu"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          }
          // centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={
            <View style={styles.menuIcons}>
              <Icon
                color="white"
                underlayColor="transparent"
                name="live-tv"
                onPress={() => {
                  console.log("Do live tv");
                }}
              />
              <Icon
                color="white"
                underlayColor="transparent"
                name="radio"
                onPress={() => {
                  console.log("Do radio");
                }}
              />
              <Icon
                color="white"
                underlayColor="transparent"
                name="share"
                onPress={() => {
                  console.log("open share");
                }}
              />
              <Icon
                color="white"
                underlayColor="transparent"
                name="phone"
                onPress={() => {
                  console.log("phone action");
                }}
              />
              <Icon
                color="white"
                underlayColor="transparent"
                name="more-vert"
                onPress={() => {
                  console.log("open menu");
                }}
              />
            </View>
          }
        />
      )
    };
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {/* <MainScreenHeader /> */}
          <View>
            <Text>LE NATIONAL</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
    backgroundColor: "transparent"
  },
  icon: {}
});
