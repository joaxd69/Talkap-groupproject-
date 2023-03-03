import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { sendMessage } from "../../services/sockets";
import { errorExit } from "../../services/sweetalert.js";
import { BsBoxArrowInRight } from "react-icons/bs";

import "./LogoutButton.css";

const LogoutButton = () => {
  const { user, logout } = useAuth0();
  const handler = () => {
    errorExit().then((response) => {
      if (response) {
        sendMessage("exit", user);
        logout({
          returnTo: "https://talkap-production-95b1.up.railway.app/",
          client_id: 'XPQCEf3HEQSutmofnTtICoPe85e4S4W3',
        });
      }
    });
  };

  return (
    <Button
      onClick={handler}
      mb="50px"
      ml="5px"
      w="93%"
      _hover={{bg: "red.500"}}
      rightIcon={<BsBoxArrowInRight />}
      colorScheme="white"
      variant="solid"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
