import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import "./Resume.css";

export default function App() {
  return (
    <View>
      <div>
        <h1>Resume</h1>
        <TouchableOpacity activeOpacity={0.95} style={styles.button}>
          <Text style={styles.text}>Download CV</Text>
        </TouchableOpacity>
        <p>Education</p>
        <div className="card-container">
          <p>Suranaree University of Technology</p><br></br>
          <p>Bachelor of Information Science (Enterprise Software), Graduated March 2022 GPAX: 3.70</p>
        </div>
        <div className="card-container">
          <p>Suranaree Wittaya School</p><br/>
          <p>M.6 Certificate, May 2018 GPA: 3.58</p>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    height: 40,
    width: 150,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    elevation: 3,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
});
