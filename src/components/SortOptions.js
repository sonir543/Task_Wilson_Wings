import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SortOptions = ({ onSort, currentSort }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => onSort("name")}
      style={[
        styles.button,
        currentSort === "name" && styles.activeButton,
      ]}
    >
      <Text style={styles.buttonText}>Sort by Name</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => onSort("population")}
      style={[
        styles.button,
        currentSort === "population" && styles.activeButton,
      ]}
    >
      <Text style={styles.buttonText}>Sort by Population</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  activeButton: { backgroundColor: "#007bff" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default SortOptions;
