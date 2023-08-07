import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppButton, NativeButton } from "ui";
// import { Button } from "ui";

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native Mobile APP</Text>
      {/* <button>
        <Text>TTT</Text>
      </button>
      <AppButton
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        label="Web Button Component"
      /> */}
      <NativeButton
        onClick={() => {
          console.log("Native Button Pressed!");
          alert("Native Button Pressed!");
        }}
        text="Native Button Component" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97dde2",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
