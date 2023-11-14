import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';


const CustomersScreen = () => {
    const tw = useTailwind();
    return (
        <SafeAreaView>
            <Text style={tw("text-blue-600")}>CustomersScreen</Text>
        </SafeAreaView>
    )
}

export default CustomersScreen;