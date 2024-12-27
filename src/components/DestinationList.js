import React from "react";
import { SectionList, View, Text, StyleSheet } from "react-native";

const DestinationList = ({ groupedDestinations }) => {
  const sections = Object.keys(groupedDestinations).map((country) => ({
    title: country,
    data: groupedDestinations[country],
  }));

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>
        Population: {item.population.toLocaleString()}
      </Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item) => item.id.toString()}
      getItemLayout={(data, index) => ({
        length: 70,
        offset: 70 * index,
        index,
      })}
      initialNumToRender={20}
      maxToRenderPerBatch={50}
      windowSize={10}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: { fontSize: 18, fontWeight: "bold" },
  itemDetails: { fontSize: 14, color: "#666" },
});

export default DestinationList;
