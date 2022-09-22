import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Registration from "../assets/images/misc/registration.svg";
import Login from "../assets/images/misc/login.svg";
import Google from "../assets/images/misc/google.svg";
import Facebook from "../assets/images/misc/facebook.svg";
import Twitter from "../assets/images/misc/twitter.svg";
import { MaterialIcons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#101010", paddingTop: 10 }}>
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
          <MaterialIcons name="alternate-email" size={20} color="#fff" />
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
            paddingBottom: 4,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="lock-outline" size={20} color="#fff" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ccc"
              style={{
                marginLeft: 8,
                color: "#fff",
              }}
            />
          </View>

          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#3D8361",
                  fontFamily: "robotoBold",
                  fontSize: 16,
                }}
              >
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 18 }}>
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
                color: "#ccc",
                fontFamily: "robotoRegular",
                fontSize: 18,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 22, alignItems: "center" }}>
          <Text style={{ color: "#979797" }}>Or, login with ....</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
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
    </View>
  );
}
