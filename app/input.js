import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/theme.js";



export default function Input() {
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(65);
  const [age, setAge] = useState(25);
  const [unit, setUnit] = useState("cm"); 


  const calculateBMI = () => {
    const bmi = weight / ((height / 100) ** 2);

    router.push({
      pathname: "/result",
      params: { bmi: bmi.toFixed(1) },
    });
  };

  return (
    
    <View style={styles.container}>

        {/* UNIT TOGGLE */}
<View style={styles.unitRow}>
  <TouchableOpacity
    style={[
      styles.unitBtn,
      unit === "cm" && styles.activeUnit,
    ]}
    onPress={() => setUnit("cm")}
  >
    <Text>CM</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.unitBtn,
      unit === "ft" && styles.activeUnit,
    ]}
    onPress={() => setUnit("ft")}
  >
    <Text>FT</Text>
  </TouchableOpacity>
</View>

      {/* HEIGHT */}
      <Text style={styles.title}>How tall are you?</Text>
     <Text style={styles.value}>
  {unit === "cm"
    ? `${height} cm`
    : `${(height / 30.48).toFixed(1)} ft`}
</Text>

      <Slider
        minimumValue={140}
        maximumValue={200}
        value={height}
        onValueChange={setHeight}
        minimumTrackTintColor={COLORS.primary}
        maximumTrackTintColor="#ddd"
      />

      {/* WEIGHT & AGE */}
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.number}>{weight}</Text>

          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.controlBtn}
              onPress={() => setWeight(weight - 1)}
            >
              <Text>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.controlBtn}
              onPress={() => setWeight(weight + 1)}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.number}>{age}</Text>

          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.controlBtn}
              onPress={() => setAge(age - 1)}
            >
              <Text>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.controlBtn}
              onPress={() => setAge(age + 1)}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* CALCULATE BUTTON */}
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.btnText}>CALCULATE</Text>
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
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  value: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  box: {
    backgroundColor: COLORS.card,
    width: "48%",
    padding: 20,
    borderRadius: 24,
    alignItems: "center",
  },
  label: {
    color: COLORS.muted,
  },
  number: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10,
  },
  controls: {
    flexDirection: "row",
  },
  controlBtn: {
    backgroundColor: "#eee",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 18,
    borderRadius: 30,
    marginTop: 40,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  unitRow: {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 10,
},
unitBtn: {
  paddingVertical: 6,
  paddingHorizontal: 16,
  borderRadius: 20,
  backgroundColor: "#eee",
  marginHorizontal: 6,
},
activeUnit: {
  backgroundColor: COLORS.primary,
},

});
