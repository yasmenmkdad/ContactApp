import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import ListContact from "./src/Views/ListContact";
import { ContactsProvider } from "./src/Context/context";
import { AppRouter } from "./src/Routes/app-router";

export default function App() {
  return (
    <NativeBaseProvider>
      <ContactsProvider>
        <StatusBar hidden={true}/>
        <AppRouter/>
      {/* <Box></Box> */}
      {/* <ListContact></ListContact> */}
      </ContactsProvider>
    </NativeBaseProvider>
  );
}
