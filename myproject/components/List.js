import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const List = () => {
  const [details, setDetails] = useState([
    {
      name: "jon",
      id: 1,
    },
    {
      name: "son",
      id: 2,
    },
    {
      name: "ron",
      id: 3,
    },
    {
      name: "eon",
      id: 4,
    },
    {
      name: "qon",
      id: 5,
    },
    {
      name: "ion",
      id: 6,
    },
    {
      name: "mon",
      id: 7,
    },
    {
      name: "xon",
      id: 8,
    },
  ]);

  const [fruits, setFruits] = useState([
    {
      id: 1,
      name: "apple",
    },
    {
      id: 2,
      name: "pineapple",
    },
    {
      id: 3,
      name: "mango",
    },
    {
      id: 4,
      name: "kiwi",
    },
  ]);

  const pressHandler = (id) => {
    setDetails((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
        Tap to delete Items
      </Text>
      <FlatList
        numColumns={2} //no. of cloumns ma divide garera dinxa
        keyExtractor={(item) => item.id} //key vanni attr navaye id lai key banauna use hunxa
        data={details}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View
        style={{
          borderBottomWidth: 1,
          marginBottom: 16,
          borderBottomColor: "#fff",
        }}
      ></View>
      <Text style={styles.boldText}>Fruits:</Text>
      <FlatList
        numColumns={2} //no. of cloumns ma divide garera dinxa
        keyExtractor={(item) => item.id} //key vanni attr navaye id lai key banauna use hunxa
        data={fruits}
        renderItem={({ item }) => (
          <View>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor="#dddddd"
              onPress={() => alert("Pressed!")}
            >
              <View>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    // backgroundColor: "red",
    // width: 300,
    // height: 100,
  },
  item: {
    padding: 10,
    backgroundColor: "#B5EAD7",
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 20,
    // width: 80,
  },
  boldText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default List;
