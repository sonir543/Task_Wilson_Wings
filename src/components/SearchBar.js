import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import debounce from "../utils/debounce";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = debounce((text) => {
    onSearch(text);
  }, 300);

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search Destinations"
      value={query}
      onChangeText={(text) => {
        setQuery(text);
        handleChange(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
