import { Box, Button, HStack, Input, VStack } from "native-base";
import { useState } from "react";
import React from "react";

export const AddPhoneNumber = ({ navigation }) => {

  const [phone, SetPhone] = new useState("");

  // Go to add new contact page with number
  const OnContinue = () => {
    navigation.navigate("AddContact", { inputphone: phone });
  };

  return (
    <Box alignItems="center">
      <Input value={phone} isReadOnly={true} width="70%" marginY={10}></Input>
      <VStack space={5} w="70%">
        <HStack justifyContent="space-between">
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 1)}
          >
            1
          </Button>
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 2)}
          >
            2
          </Button>
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 3)}
          >
            3
          </Button>
        </HStack>
        <HStack justifyContent="space-between">
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 4)}
          >
            4
          </Button>
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 5)}
          >
            5
          </Button>
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 6)}
          >
            6
          </Button>
        </HStack>
        <HStack justifyContent="space-between">
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 7)}
          >
            7
          </Button>
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 8)}
          >
            8
          </Button>
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 9)}
          >
            9
          </Button>
        </HStack>
        <HStack justifyContent="space-between">
          <Button w={20} bgColor="gray.100"></Button>
          <Button
            w={20}
            bgColor="danger.900"
            onPress={() => SetPhone((prevValue) => prevValue + 0)}
          >
            0
          </Button>
          <Button
            w={20}
            bgColor="coolGray.500"
            onPress={() => SetPhone((prevValue) => prevValue.slice(0, -1))}
          >
            X
          </Button>
        </HStack>
      </VStack>
      <Button
        backgroundColor="coolGray.500"
        marginTop={10}
        width="60%"
        onPress={OnContinue}
      >
        Continue
      </Button>
    </Box>
  );
};
