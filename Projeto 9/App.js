import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Home Screen</Text>
  </View>
);

const FeedScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Feed Screen</Text>
  </View>
);

const CatalogScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Catalog Screen</Text>
  </View>
);

const AccountScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>FeedScreen</Text>
  </View>
);

const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Feed') {
          iconName = focused ? 'rss-square' : 'rss-square';
        } else if (route.name === 'Catalog') {
          iconName = focused ? 'list' : 'list';
        } else if (route.name === 'Account') {
          iconName = focused ? 'user' : 'user';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);


const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>SignUp Screen</Text>
      <Button title="SignIn" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  );
};

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text></Text>
      <Button title="Go to Main" onPress={() => navigation.navigate('Main')}/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f4511e',
  },
});

