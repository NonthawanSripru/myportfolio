import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "./Home.css";

export default function App() {
  return (
    <View>
      <div className="flex-container">
        <div>flex 1</div>
        <div>
          <Text style={styles.textHi}>Hi!</Text>
          <br />
          <Text style={styles.textName}>I'm Nonthawan</Text>
          <br />
          <Text style={styles.textJob}>Web programmer</Text>
          <br />
          <br />
          <Text style={styles.text}>
            I'm a freshly graduated student with a Bachelor of Information
            Science (Enterprise Software). A position as a Developer will allow
            me to utilize problem-solving skills and teamwork skills in
            coordinating the effort of programmers. Also, bring exceptional
            skills in designing, coding, testing, and implementing
            customizations to meet customer expectations.
          </Text>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  textHi: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  textName: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  textJob: {
    fontSize: "25px",
    fontWeight: "regular",
    color: "white",
  },
  text: {
    fontSize: "18px",
    color: "white",
    textAlign: "left",
  },
});
