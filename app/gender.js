import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/theme.js";

export default function Gender() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <Text style={styles.sub}>What's Your Gender?</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.emoji}>👩</Text>
          <Text>FEMALE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.emoji}>👨</Text>
          <Text>MALE</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/input")}
      >
        <Text style={styles.btnText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  sub: {
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 30,
    margin: 10,
    borderRadius: 24,
    alignItems: "center",
  },
  emoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    width: "80%",
    borderRadius: 30,
    marginTop: 30,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
