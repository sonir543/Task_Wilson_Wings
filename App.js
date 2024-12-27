import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DestinationList from "./src/components/DestinationList";
import SearchBar from "./src/components/SearchBar";
import SortOptions from "./src/components/SortOptions";
import { loadData } from "./src/utils/Storage";

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [groupedDestinations, setGroupedDestinations] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");

  // Fetch and cache data on first launch
  useEffect(() => {
    const initializeData = async () => {
      const data = await loadData();
      setDestinations(data);
      groupByCountry(data);
    };
    initializeData();
  }, []);

  // Group destinations by country
  const groupByCountry = (data) => {
    const grouped = data.reduce((acc, destination) => {
      const country = destination.country;
      if (!acc[country]) acc[country] = [];
      acc[country].push(destination);
      return acc;
    }, {});
    setGroupedDestinations(grouped);
  };

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = destinations.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    groupByCountry(filtered);
  };

  // Handle sorting functionality
  const handleSort = (option) => {
    setSortOption(option);
    const sorted = [...destinations].sort((a, b) =>
      option === "name"
        ? a.name.localeCompare(b.name)
        : b.population - a.population
    );
    groupByCountry(sorted);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <SortOptions onSort={handleSort} currentSort={sortOption} />
      <DestinationList groupedDestinations={groupedDestinations} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default App;
