import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

const CustomDrawerContent = props => {
  console.log("custom drawer", props);
  return (
    <ScrollView style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomDrawerContent;
