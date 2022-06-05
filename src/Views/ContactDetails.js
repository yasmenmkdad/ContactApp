import { Ionicons } from "@expo/vector-icons";
// import Icon from 'react-native-ionicons'
// import Icon from 'react-native-ico';

import {
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from "native-base";
import { Alert } from "react-native";

import { useContext, useEffect } from "react";

import { DeleteContact, getContactDetails } from "../Actions/callAPI";
import { contactsContext } from "../Context/context";

export const ContactDetailsView = ({ navigation, route }) => {
  // ID of selected contact
  const { id } = route.params;

  // Context and Dispatch
  const { state, dispatch } = useContext(contactsContext);
  const resolve = async () => {
    dispatch(await getContactDetails(id));
  };
  useEffect(() => {
    console.log("id in ",id);
    if (id) resolve();
  }, [dispatch]);
  const contact = state.users.details;

  //Button Delete
  const DeletedContact = async () => {
    dispatch(await DeleteContact(id));
    Alert.alert("Deleted");
    navigation.navigate("ListContact");
  };

  //Button Edit
  const EditContact = () => {
    navigation.navigate("UpdateContact", { id: id });
  };

  if (!contact) return <Text>Loading ...</Text>;

  return (
    <Box>
      {/* Button Edit , Delete */}
      <Box flexDirection="row" left={250}>
        <Button backgroundColor="gray" onPress={EditContact}>
          
          <Icon as={Ionicons} name="brush-outline" size={7} />
        </Button>
        <Button backgroundColor="gray" onPress={DeletedContact}>
        <Icon as={Ionicons} name="trash-outline" size={7} />
        </Button>
      </Box>

      <Box alignItems="center">
        {/* Image */}
        <Avatar
          marginTop={10}
          size="220px"
          source={{
            uri: contact[0].profileImg,
          }}
          marginBottom={5}
        />
        <VStack space={3} divider={<Divider />} w="90%">
          {/* Name */}
          <HStack justifyContent="space-between">
            <Text color={"amber.700"}>Name</Text>
            <Text>{contact[0].name}</Text>
          </HStack>
          {/* Phone */}
          <HStack justifyContent="space-between">
            <Text color={"amber.700"}>Phone</Text>
            <Text>{contact[0].phone}</Text>
          </HStack>
          {/* Address */}
          <HStack justifyContent="space-between">
            <Text color={"amber.700"}>Address</Text>
            <Text>{contact[0].address}</Text>
          </HStack>
          {/* Email */}
          <HStack justifyContent="space-between">
            <Text color={"amber.700"}>Email</Text>
            <Text>{contact[0].email}</Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
