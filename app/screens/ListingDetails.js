import React from "react"
import { Image, StyleSheet, View } from "react-native"

import Text from "../components/Text"
import ListItem from "../components/ListItem"
import colors from "../config/colors"

const ListingDetails = ({ route }) => {
    const { image, title, price } = route.params

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/DP.jpg")}
                    title="Gurveen Singh"
                    description="5 listings"
                />
            </View>
        </View>
    )
}

export default ListingDetails

const styles = StyleSheet.create({
    container: {},
    detailsContainer: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: "300",
        marginBottom: 6,
    },
    userContainer: {
        marginTop: 30,
        paddingLeft: 5,
    },
})
