import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Viagem } from './pages/viagem';
import { Filmes } from './pages/filmes';
import { Roupas } from './pages/roupas';
import { Receita } from './pages/receita';
import { Ionicons } from '@expo/vector-icons/'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="receita"
                component={Receita}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="fast-food" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="fast-food-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="viagem"
                component={Viagem}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="airplane" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="airplane-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="filmes"
                component={Filmes}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="videocam" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="videocam-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="roupas"
                component={Roupas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="shirt" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="shirt-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}