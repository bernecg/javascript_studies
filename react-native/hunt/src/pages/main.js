import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import api from "../services/api";

class HomeScreen extends React.Component {
    state = {
        productInfo: {},
        products: [],
        page: 1
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: "JSHunt" });
        this.loadProdcuts();
    }

    // using arrow function otherwise we can't access the "this"
    loadProdcuts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;
        this.setState({
            products: [...this.state.products, ...docs],
            productInfo,
            page
        });
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.productButton}
                onPress={() => {
                    this.props.navigation.navigate("Product", {
                        product: item
                    });
                }}>
                <Text style={styles.productButtonText}>Access</Text>
            </TouchableOpacity>
        </View>
    )

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) {
            return;
        }

        this.loadProdcuts(page + 1);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.products}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
                <Button title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
});

export default HomeScreen;
