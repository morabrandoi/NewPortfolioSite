import * as React from "react"
import {
  Heading
} from "@chakra-ui/react"

interface ContactProps {

}

export default function Contact(props: ContactProps) {

  return (
    <Heading id="Contact" sx={{'scrollMarginTop': '100px'}}>
      {"<Contact>"}
    </Heading>
  );
}
