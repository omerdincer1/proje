import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Member/LoginScreen';
import RegisterScreen from '../Screens/Member/RegisterScreen';
import { TabNavigation } from './TabNavigation';
import WelcomeScreen from '../Screens/Member/WelcomeScreen';
import ProductScreen from '../Screens/Dashboard/Home/Product/ProductScreen';
import IncomeExpenseScreen from '../Screens/Dashboard/Home/IncomeExpense/IncomeExpenseScreen';
const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName='Welcome' options={{headerShown:false}}>
      <Stack.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} />
      <Stack.Screen options={{headerShown:false}}  name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown:false}} name="Register" component={RegisterScreen} />
      <Stack.Screen  options={{headerShown:false, headerTitle:"Ana Menü", }} name='Dashboard' component={TabNavigation}/>
      <Stack.Screen  name="Product" component={ProductScreen} />
      <Stack.Screen  options={{headerShown:true, headerTitle:"Gelir Gider"}} name="IncomeExpense" component={IncomeExpenseScreen} />
    </Stack.Navigator>
  );
}