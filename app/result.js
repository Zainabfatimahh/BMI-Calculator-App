import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/theme.js";

export default function Result() {
  const { bmi } = useLocalSearchParams();
  const bmiValue = parseFloat(bmi);

  let status = "";
  let statusColor = "";

  if (bmiValue < 18.5) {
    status = "Underweight";
    statusColor = "#4DA8DA";
  } else if (bmiValue < 25) {
    status = "Normal";
    statusColor = "#4CAF50";
  } else if (bmiValue < 30) {
    status = "Overweight";
    statusColor = "#FFA726";
  } else {
    status = "Obese";
    statusColor = "#F44336";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>

      <View style={styles.card}>
        <Text style={styles.bmiText}>{bmiValue}</Text>
        <Text style={[styles.status, { color: statusColor }]}>
          {status}
        </Text>
      </View>

      <Text style={styles.desc}>
        Your BMI is {bmiValue}, indicating that your weight is in the{" "}
        <Text style={{ fontWeight: "bold" }}>{status}</Text> range.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/gender")}
      >
        <Text style={styles.btnText}>RE-CALCULATE</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  card: {
    backgroundColor: COLORS.card,
    width: "100%",
    padding: 40,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  bmiText: {
    fontSize: 48,
    fontWeight: "bold",
  },
  status: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    color: COLORS.muted,
    marginBottom: 40,
    fontSize: 15,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 30,
    width: "100%",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
