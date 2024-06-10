import React, { Suspense, lazy } from 'react';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ContexProvider from "./ContextApi/ContexProvider";
import Login from "./Pages/Login"
const Stack = createStackNavigator();

// Lazy load the components
const Home = lazy(() => import("./Pages/Home"));
const General = lazy(() => import("./Pages/General"));
const Wi = lazy(() => import("./Pages/Wi"));
const Msi = lazy(() => import("./Pages/Msi"));
const Wtams = lazy(() => import("./Pages/Wtams"));
const Sams = lazy(() => import("./Pages/Sams"));
const Wqams = lazy(() => import("./Pages/Wqams"));
const Efams = lazy(() => import("./Pages/Efams"));
const PinGeneration = lazy(() => import("./Pages/PinGeneration"));
const PinAccess = lazy(() => import("./Pages/PinAccess"));
const Profile = lazy(() => import("./Pages/Profile"));

function App() {
  return (
    <ContexProvider>
      <NavigationContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Stack.Navigator initialRouteName="Login" screenOptions={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PinAccess"
              component={PinAccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PinGeneration"
              component={PinGeneration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="General"
              component={General}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wi"
              component={Wi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Msi"
              component={Msi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wtams"
              component={Wtams}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sams"
              component={Sams}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wqams"
              component={Wqams}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Efams"
              component={Efams}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </Suspense>
      </NavigationContainer>
    </ContexProvider>
  );
}

export default App;
