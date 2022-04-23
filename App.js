import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  console.log("Hello World");

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={() => console.log("yo")}>
        Hello World G
      </Text>
      <TouchableHighlight onPress={() => console.log("Tapped")}>
        <Image
          blurRadius={5}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight> */}
      {/* <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "Yes", onPress: () => console.log("y") },
            { text: "No", onPress: () => console.log("n") },
          ])
        }
        color="green"
      /> */}

      <Button
        title="Click Me 2"
        onPress={() =>
          Alert.prompt("Title", "Message", (text) => console.log(text))
        }
        color="green"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
