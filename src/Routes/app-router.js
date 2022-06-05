import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListContact } from "../Views/ListContact";
import { ContactDetailsView } from "../Views/ContactDetails";
import { UpdateContactView } from "../Views/UpdateContact";
import { NewContactView } from "../Views/NewContact";
import { AddPhoneNumber } from "../Views/PhoneNumberView";
const Navigator = createNativeStackNavigator();

export const AppRouter = () => (
  <NavigationContainer>
    <Navigator.Navigator>
      <Navigator.Screen
        options={{
            headerShown:false,
          title: "Home screen",
        }}
        name="ListContact"
        component={ListContact}
      />
      <Navigator.Screen
        name="Profile"
        component={ContactDetailsView}
      />
      <Navigator.Screen
        name="UpdateContact"
        component={UpdateContactView}
      />
      <Navigator.Screen
        name="AddContact"
        component={NewContactView}
      />
      <Navigator.Screen
        name="AddPhone"
        component={AddPhoneNumber}
      />
    </Navigator.Navigator>
  </NavigationContainer>
);
