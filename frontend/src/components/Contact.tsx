import * as React from "react"
import {
  Heading
} from "@chakra-ui/react"

type ContactProps = {

}

export default function Contact(props: ContactProps) {

  return (
    <Heading id="Contact" sx={{'scroll-margin-top': '100px'}}>
      {"<Contact>"}
    </Heading>
  );
}
