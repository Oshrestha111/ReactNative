import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Registration from "../assets/images/misc/registration.svg";
import Google from "../assets/images/misc/google.svg";
import Facebook from "../assets/images/misc/facebook.svg";
import Twitter from "../assets/images/misc/twitter.svg";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen({ navigation }) {
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const getDateOfBirth = () => {
    let newDate = new Date(date).toDateString();
    console.log(newDate); // 4/15/2022
    return date !== "" ? newDate : "Date of Birth";
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#101010", paddingTop: 10 }}
    >
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 40,
          }}
        >
          <View
            style={{
              paddingHorizontal: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Registration width={300} height={300} />
          </View>

          <Text
            style={{
              color: "#fff",
              fontFamily: "robotoRegular",
              fontSize: 26,
              // paddingBottom: 1,
            }}
          >
            Register
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                // backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                padding: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
              }}
            >
              <Google width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                padding: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
              }}
            >
              <Facebook width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                padding: 10,
                borderWidth: 2,
                borderColor: "#ccc",
                borderRadius: 8,
              }}
            >
              <Twitter width={30} height={30} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 22,
            }}
          >
            <Text style={{ color: "#ccc", fontFamily: "robotoRegular" }}>
              Or, register with email...
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 8 }}>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              alignItems: "center",
              marginBottom: 18,
              paddingBottom: 4,
            }}
          >
            <MaterialIcons name="person-outline" size={20} color="#ccc" />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#ccc"
              style={{
                marginLeft: 8,
                color: "#fff",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              alignItems: "center",
              marginBottom: 18,
              paddingBottom: 4,
            }}
          >
            <MaterialIcons name="alternate-email" size={20} color="#ccc" />
            <TextInput
              placeholder="Email ID"
              placeholderTextColor="#ccc"
              style={{
                marginLeft: 8,
                color: "#fff",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
              paddingBottom: 4,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="lock-outline" size={20} color="#ccc" />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#ccc"
                style={{
                  marginLeft: 8,
                  color: "#fff",
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
              paddingBottom: 4,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="lock-outline" size={20} color="#ccc" />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#ccc"
                style={{
                  marginLeft: 8,
                  color: "#fff",
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 4,
            }}
          >
            <View style={{ flexDirection: "row", paddingBottom: 4 }}>
              <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
                <MaterialIcons name="date-range" size={20} color="#ccc" />
              </TouchableOpacity>
              <TextInput
                style={{ color: "#ccc", marginLeft: 8 }}
                value={getDateOfBirth()}
                placeholder="Select Date of Birth"
                placeholderTextColor="#ccc"
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "#3D8361",
                borderRadius: 8,
                // height: 50,
                justifyContent: "center",
                paddingTop: 12,
                paddingBottom: 12,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "robotoRegular",
                  fontSize: 18,
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <Text style={{ color: "#ccc", fontFamily: "robotoRegular" }}>
              Already registered ?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  color: "#3D8361",
                  fontFamily: "robotoBold",
                  fontSize: 16,
                  marginLeft: 6,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
