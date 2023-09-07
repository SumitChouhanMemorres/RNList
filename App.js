import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import pokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={
            <View style={styles.noItemsFound}>
              <Text style={styles.noItemsFoundText}>No Items Found</Text>
            </View>
          }
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "white",
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  noItemsFound: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  noItemsFoundText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
});
