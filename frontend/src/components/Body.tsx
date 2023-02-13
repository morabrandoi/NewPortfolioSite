import {ReactNode} from "react"
import {
  Flex,
} from "@chakra-ui/react"

type BodyProps = {
  children: ReactNode;
}

export default function Body({children} : BodyProps) {

  return (
    <Flex direction={'column'} align='center'>
      {children}
    </Flex>
  );
}