import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppButton, NativeButton } from "ui";
import { useMyCustomHook } from "models";
import { isValidArray } from "myutils";
// import { Button } from "ui";

export default function Native() {
  const data = useMyCustomHook("Fetching data from - Custom Hook")
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native Mobile APP</Text>
      <View>
        <Text>My Custom hook func</Text>

        <Text>
          {data?.data} loading flag is {data?.loading?.toString()}
        </Text>
      </View>
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
          alert(`Native Button Pressed!${isValidArray([], true)}`);

        }}
        text="Native Button Component" />
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text>Header</Text>
        </View>
        <View style={styles.cardBody}>
          <Text>ContentContentContent Content</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,

    backgroundColor: "#e1f1b4",
    borderColor: "#b3b3b3",
    borderRadius: 12,
    borderWidth: 1,
    height: 250,
    width: 250
  },
  cardHeader: {
    padding: 8,
    borderBottomColor: "#b3b3b3",
    borderBottomWidth: 1,
    height: 50,
  },
  cardBody: {
    padding: 8,
  },
  container: {
    paddingVertical: 50,
    flex: 1,
    backgroundColor: "#97dde2",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
