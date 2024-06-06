import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import General from "./Pages/General";
import Wi from "./Pages/Wi";
import Msi from "./Pages/Msi";
import Wtams from "./Pages/Wtams";
import Sams from "./Pages/Sams";
import Wqams from "./Pages/Wqams";
import Efams from "./Pages/Efams";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="General" component={General} options={{headerShown:false}} />
        <Stack.Screen name="Wi" component={Wi} options={{headerShown:false}} />
        <Stack.Screen name="Msi" component={Msi} options={{headerShown:false}} />
        <Stack.Screen name="Wtams" component={Wtams} options={{headerShown:false}} />
        <Stack.Screen name="Sams" component={Sams} options={{headerShown:false}} />
        <Stack.Screen name="Wqams" component={Wqams} options={{headerShown:false}} />
        <Stack.Screen name="Efams" component={Efams} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
