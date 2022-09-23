import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Registration from "../assets/images/misc/registration.svg";
import Login from "../assets/images/misc/login.svg";
import Google from "../assets/images/misc/google.svg";
import Facebook from "../assets/images/misc/facebook.svg";
import Twitter from "../assets/images/misc/twitter.svg";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#101010", paddingTop: 10 }}
    >
      <ScrollView>
        <View style={{ paddingHorizontal: 40 }}>
          <Login width={300} height={300} />
          <Text
            style={{
              color: "#fff",
              fontFamily: "robotoRegular",
              fontSize: 26,
              paddingBottom: 14,
            }}
          >
            Login
          </Text>

          <InputField
            label={"Email ID"}
            icon={
              <MaterialIcons name="alternate-email" size={20} color="#fff" />
            }
            keyboardType={"email-address"}
          />

          <InputField
            label={"Password"}
            icon={<MaterialIcons name="lock-outline" size={20} color="#fff" />}
            inputType={"password"}
            fieldButtonLabel={"Forgot ?"}
            fieldButtonFunction={() => {}}
          />

          <CustomButton label={"Login"} onPress={() => {}} />

          <View style={{ marginTop: 22, alignItems: "center" }}>
            <Text style={{ color: "#979797" }}>Or, login with ....</Text>
          </View>

          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
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
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 22,
          }}
        >
          <Text style={{ color: "#ccc", fontFamily: "robotoRegular" }}>
            New to the app?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: "#3D8361",
                fontFamily: "robotoBold",
                fontSize: 16,
                marginLeft: 6,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
