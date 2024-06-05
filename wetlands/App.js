import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
