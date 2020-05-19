import React from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends React.Component {
    render() {
        const { itemId } = this.props.route.params;
        const { otherParam } = this.props.route.params;

        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Details Screen</Text>
                <Text>Item ID: {JSON.stringify(itemId)}</Text>
                <Text>Description: {JSON.stringify(otherParam)}</Text>
                <Button title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })} />
                <Button title="Go back"
                    onPress={() => this.props.navigation.goBack()} />
                <Button title="Return everything"
                    onPress={() => this.props.navigation.popToTop()} />
            </View>
        );
    }
}

export default DetailsScreen;
