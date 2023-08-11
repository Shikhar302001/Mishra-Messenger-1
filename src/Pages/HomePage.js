import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem("userInformation"));

    if (userInformation) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        margin = "3.2rem 0 1rem 0"
        p={3}
        borderRadius="lg"
        borderColor="white" borderWidth="1px"
        w="100%"
        //bg= "#232526" /* fallback for old browsers */
       // bg= "-webkit-linear-gradient(to right, #414345, #232526)"  /* Chrome 10-25, Safari 5.1-6 */
        bg ="linear-gradient(to right, #414345, #232526)"/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      >
        <Text
          color="white"
          fontSize="4xl"
          fontFamily="Work sans"
          fontWeight="bold"
        >
          Mishra-Messenger
        </Text>
      </Box>
      <Box bg="blue.50" w="100%" p={4} borderRadius="lg" borderColor="black" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme="cyan" >
          <TabList mb="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
