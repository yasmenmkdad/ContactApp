import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Alert } from "react-native";
import { useContext, useState } from "react";
import { contactsContext } from "../Context/context";
import { AddContact } from "../Actions/callAPI";

export const NewContactView = ({ navigation, route }) => {
  // GEt Phone from prev page
  const { inputphone } = route.params;

  const { state, dispatch } = useContext(contactsContext);

  const [name, SetName] = useState("");
  const [phone, SetPhone] = useState(inputphone);
  const [address, SetAddress] = useState("");
  const [email, SetEmail] = useState("");
  const [img, Setimg] = useState(
    "https://emitherapy.co.za/wp-content/uploads/2020/08/person-icon.png"
  );

  //For Change color of button of img (Male) , (Female)
  const [BtnImg1Color, SetBtnImg1Color] = useState("gray.300");
  const [BtnImg2Color, SetBtnImg2Color] = useState("gray.300");

  // go back oncancle
  const OnCancle = () => {
    navigation.goBack();
  };

  //save contact in api
  const OnSave = async()=>{
    console.log("insave");
    //Generate UniqID
    const UUID = require("uuid-int");
    const generator = UUID(0);
    const uuid = generator.uuid();

    //Generate UniqID (Another way)
    // const uint32 = self.crypto.getRandomValues(new Uint32Array(1))[0]; // Create Random ID

    const NewContact = {
      ID: parseInt(parseInt(uuid) / 9999),
      name: name,
      phone: phone,
      address: address,
      email: email,
      profileImg: img,
    };

    dispatch(await AddContact(NewContact));
    Alert.alert("Added");
    navigation.popToTop();
  }

  return (
    <Box>
      <ScrollView>
        <Box alignItems="center" marginTop={10}>
          <VStack space={7} w="90%">
            {/* Input Name */}
            <HStack justifyContent="space-between">
              <Text color={"danger.900"}>Name</Text>
              <Input
                w="70%"
                variant="filled"
                value={name}
                onChangeText={(val) => SetName(val)}
              ></Input>
            </HStack>

            {/* Input Phone */}
            <HStack justifyContent="space-between">
              <Text color={"danger.900"}>Phone</Text>
              <Input
                w="70%"
                variant="filled"
                value={phone}
                onChangeText={(val) => SetPhone(val)}
              ></Input>
            </HStack>

            {/* Input Address */}
            <HStack justifyContent="space-between">
              <Text color={"danger.900"}>Address</Text>
              <Input
                w="70%"
                variant="filled"
                value={address}
                onChangeText={(val) => SetAddress(val)}
              ></Input>
            </HStack>

            {/* Input Email */}
            <HStack justifyContent="space-between">
              <Text color={"danger.900"}>Email</Text>
              <Input
                w="70%"
                variant="filled"
                value={email}
                onChangeText={(val) => SetEmail(val)}
              ></Input>
            </HStack>

            {/* Input Image */}
            <HStack justifyContent="space-between">
              <Button
                backgroundColor={BtnImg1Color}
                onPress={() => {
                  //Change color of selected button & change path of image
                  SetBtnImg1Color("danger.900");
                  SetBtnImg2Color("gray.300");
                  Setimg(
                    "https://emitherapy.co.za/wp-content/uploads/2020/08/person-icon.png"
                  );
                }}
              >
                <Image
                  width={100}
                  height={100}
                  source={{
                    uri: "https://emitherapy.co.za/wp-content/uploads/2020/08/person-icon.png",
                  }}
                ></Image>
              </Button>

              <Button
                backgroundColor={BtnImg2Color}
                onPress={() => {
                  //Change color of selected button & change path of image
                  SetBtnImg1Color("gray.300");
                  SetBtnImg2Color("danger.900");
                  Setimg(
                    "https://fashion.sgtuniversity.ac.in/wp-content/uploads/2017/01/female-icon.jpg"
                  );
                }}
              >
                <Image
                  width={100}
                  height={100}
                  source={{
                    uri: "https://fashion.sgtuniversity.ac.in/wp-content/uploads/2017/01/female-icon.jpg",
                  }}
                ></Image>
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Button Save , Cancle */}
        <Box marginTop={10} marginX={5} marginBottom={7}>
          <Button backgroundColor="coolGray.800" onPress={OnSave}>
            Save
          </Button>
          <Button
            marginTop={10}
            backgroundColor="coolGray.800"
            onPress={OnCancle}
          >
            cancle
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};
