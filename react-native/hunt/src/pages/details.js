import * as React from 'react';
import { View, Text, Button } from 'react-native';


function DetailsScreen({ route, navigation }) {
    const { itemId } = route.params;
    const { otherParam } = route.params;
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Details Screen</Text>
            <Text>Item ID: {JSON.stringify(itemId)}</Text>
            <Text>Item ID: {JSON.stringify(otherParam)}</Text>
            <Button title="Go to Details... again"
                onPress={() => navigation.push('Details', {
                    itemId: Math.floor(Math.random() * 100),
                })} />
            <Button title="Go back"
                onPress={() => navigation.goBack()} />
            <Button title="Return everything"
                onPress={() => navigation.popToTop()} />
        </View>
    );
}

export default DetailsScreen;
