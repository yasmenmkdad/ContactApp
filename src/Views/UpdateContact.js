import {
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Input,
  Text,
  VStack,
} from "native-base";
import { useContext, useEffect, useState } from "react";
import { getContactDetails, UpdateContact } from "../Actions/callAPI";
import { contactsContext } from "../Context/context";
import React from "react";
import { Alert } from "react-native";

export const UpdateContactView = ({ navigation, route }) => {
  // id for selected course
  const { id } = route.params;

  // Context and dispatch
  const { state, dispatch } = useContext(contactsContext);

  const resolve = async () => {
    dispatch(await getContactDetails(id));
  };

  useEffect(() => {
    if (id) {
      resolve();
    }
  }, []);

  // get user details;
  const user = state.users.details;

  const [name, SetName] = useState(user[0].name);
  const [phone, SetPhone] = useState(user[0].phone);
  const [address, SetAddress] = useState(user[0].address);
  const [email, SetEmail] = useState(user[0].email);
  const [img, Setimg] = useState(user[0].profileImg);

  // cancle and return back
  const OnCancle = async () => {
    navigation.goBack();
  };

  // Save edit of contact
  const OnSave = async () => {
    const UpdatedUser = {
      ID: id,
      name: name,
      phone: phone,
      address: address,
      email: email,
      profileImg: img,
    };
    dispatch(await UpdateContact(id, UpdatedUser));
    Alert.alert("Updated");
    navigation.popToTop();
  };

  if (!user) return <Text>Loading ...</Text>;
  return (
    <Box>
      <Box alignItems="center">
        {/* Image */}
        <Avatar
          marginTop={2}
          size="190px"
          source={{
            uri: user[0].profileImg,
          }}
          marginBottom={5}
        />
        <VStack space={3} divider={<Divider />} w="90%">
          <HStack justifyContent="space-between">
            {/* Name */}
            <Text color={"amber.700"}>Name</Text>
            <Input
              w="70%"
              variant="filled"
              value={name}
              onChangeText={(val) => {
                SetName(val);
              }}
            ></Input>
          </HStack>
          <HStack justifyContent="space-between">
            {/* phone */}
            <Text color={"amber.700"}>Phone</Text>
            <Input
              w="70%"
              variant="filled"
              value={phone}
              onChangeText={(val) => {
                SetPhone(val);
              }}
            ></Input>
          </HStack>
          <HStack justifyContent="space-between">
            {/* Address */}
            <Text color={"amber.700"}>Address</Text>
            <Input
              w="70%"
              variant="filled"
              value={address}
              onChangeText={(val) => {
                SetAddress(val);
              }}
            ></Input>
          </HStack>
          <HStack justifyContent="space-between">
            {/* Email */}
            <Text color={"amber.700"}>Email</Text>
            <Input
              w="70%"
              variant="filled"
              value={email}
              onChangeText={(val) => {
                SetEmail(val);
              }}
            ></Input>
          </HStack>
        </VStack>
      </Box>
      {/* Button Save , Cancle */}
      <Box flexDirection="row" marginTop={7}>
        <Button
          backgroundColor="coolGray.600"
          onPress={OnCancle}
          marginLeft="6"
        >
          cancle
        </Button>
        <Button backgroundColor="coolGray.600" onPress={OnSave} left={170}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
