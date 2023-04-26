import { Button, Navbar, Text } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: sessionData } = useSession();

  return (
    <Navbar variant="sticky" disableShadow isBordered borderWeight="bold">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          TANGERINE
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-rounded">
        <Navbar.Link>Coffee</Navbar.Link>
        <Navbar.Link>Tea</Navbar.Link>
        <Navbar.Link>Equipment</Navbar.Link>
        <Navbar.Link>About us</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button bordered onClick={sessionData ? () => void signOut() : () => void signIn()}>
            <Text>{sessionData ? "Sign out" : "Sign in with Discord"}</Text>
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
