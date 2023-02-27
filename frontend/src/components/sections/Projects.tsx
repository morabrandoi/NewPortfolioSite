import * as React from "react"
import {
  Heading
} from "@chakra-ui/react"

interface ProjectsProps {

}

export default function Projects(props: ProjectsProps) {

  return (
    <Heading id="Projects" sx={{'scrollMarginTop': '100px'}}>
      {"<Projects>"}
    </Heading>
  );
}
