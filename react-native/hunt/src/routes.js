import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "./pages/main";
import DetailsScreen from "./pages/details";
import ProductScreen from "./pages/product";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#f4511e",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    }
                }}>
                <Stack.Screen name="Home" component={MainScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
