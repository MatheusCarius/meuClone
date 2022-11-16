import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#d27700",
        tabBarInactiveTintColor: "#aaa",
        tabBarInactiveBackgroundColor: "#F8F8F8",
        tabBarStyle: { backgroundColor: "#F8F8F8", paddingBottom: 2 },
      }}
    >
      <Tab.Screen
        name="Minha Página"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Foundation name="home" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Inteligente"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="checksquareo" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
                name='Meu Perfil'
                component={Login}
                options={{
                    tabBarIcon: ({color})=>{
                        return (
                            <FontAwesome5 name="user-circle" size={30} color={color} />
                        )

                    }
                }}
                />

      {/* <Tab.Screen name="Minha Página" component={Home} />
      <Tab.Screen name="Inteligente" component={Login} />
      <Tab.Screen name="Meu Perfil" component={Login} /> */}
    </Tab.Navigator>
  );
};

export function Routes() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
