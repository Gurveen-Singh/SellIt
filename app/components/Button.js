import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

import colors from "../config/colors"

const AppButton = ({ title, onPress, color = "primary" }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
            activeOpacity={0.5}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "capitalize",
        fontWeight: "bold",
    },
})
