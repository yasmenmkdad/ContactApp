import {
  Avatar,
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import { contactsContext } from "../Context/context";
import { getContactsList } from "../Actions/callAPI";

import { useIsFocused } from "@react-navigation/native";

export const ListContact = ({ navigation }) => {
  // Dispatch of Context , Resolve => to Get my contacts
  const { state, dispatch } = useContext(contactsContext);
  const resolve = async () => {
    dispatch(await getContactsList());
  };

  // Get Data when page open
  const isFocused = useIsFocused();
  console.log(isFocused);
  useEffect(() => {
    console.log("InEfffffffffffffffffffect")
    resolve();
  }, [isFocused]);

  // When select One Contact in list
  function onPressAction(item) {
    navigation.navigate("Profile", { id: item.ID });
  }

  // Add New Contact Button
  function onCreateContact() {
    navigation.navigate("AddPhone");
  }

  return (
    <Box marginBottom={50}>
      <Heading
        fontSize="xl"
        p="4"
        pb="3"
        _light={{ color: "rose.800" }}
        _dark={{ color: "rose.50" }}
      >
        Contacts
      </Heading>
      {/* Add New Contact */}
      <Heading pb="1" marginLeft={160}>
        <Button backgroundColor="gray.100" onPress={onCreateContact}>
          <Text _light={{ color: "rose.800" }}>Add New Contact</Text>
        </Button>
      </Heading>
      {/* List Of Contacts */}
      <FlatList
        marginBottom={20}
        data={state.users.list || []}
        extraData
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressAction(item)}
            underlayColor="#a3cded"
          >
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                {/* Image of Contact */}
                <Avatar
                  size="48px"
                  source={{
                    uri: item.profileImg,
                  }}
                />
                {/* Name And Phone number */}
                <VStack>
                  <Text color="coolGray.800" bold>
                    {item.name}
                  </Text>
                  <Text color="coolGray.600">{item.phone}</Text>
                </VStack>
                
                <Spacer />
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.ID}
      />
    </Box>
  );
};

export default ListContact;
