import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
// import Form from "./components/Form";
import Test from "./components/Test";
import Todo from "./components/todos/Todo";

export default function App() {
  return (
    <View>
      {/* <Test /> */}
      <Todo />
      <Text style={{ marginTop: 80 }}>hell</Text>
    </View>
  );
}
