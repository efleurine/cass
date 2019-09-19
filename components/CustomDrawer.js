import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

function CustomDrawerContent(props) {
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Cool</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomDrawerContent;
