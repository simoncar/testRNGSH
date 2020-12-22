import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { useName, useMember } from "./count";

export default function App() {
	const [refreshName, setterName, stateName, isUpdatedName] = useName();
	const [
		refreshMember,
		setterMember,
		stateMember,
		isUpdatedMember,
	] = useMember();

	useEffect(() => {
		refreshName();
		refreshMember();
	}, []);

	return (
		<View style={styles.container}>
			<Text>{stateName}</Text>
			<Text>{stateMember}</Text>

			<Button
				title="Button 2"
				onPress={() => {
					setterName("Red Name");
					setterMember("Red");
				}}
			/>

			<Button
				title="Button 2"
				onPress={() => {
					setterName("Blue Name");
					setterMember("Blue");
				}}
			/>
			<Text>
				both setters will run OK but only the last setter will be stored
				in AsyncStorage
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
