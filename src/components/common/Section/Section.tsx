import { Box, useColorModeValue } from '@chakra-ui/react';
import {
  DARK_MODE_BG_COLOR,
  LIGHT_MODE_BG_COLOR,
} from '../../../constants/constants';

type SectionProps = {
  children: React.ReactNode;
  transitionMs: number;
  linkNameId: string;
};

export default function Section({
  children,
  transitionMs,
  linkNameId,
}: SectionProps) {
  const backgroundColor = useColorModeValue(
    LIGHT_MODE_BG_COLOR,
    DARK_MODE_BG_COLOR
  );

  return (
    <Box
      className="section"
      zIndex={100}
      borderRadius={10}
      backgroundColor={backgroundColor}
      m={8}
      p={8}
      id={linkNameId}
      sx={{ scrollMarginTop: '1000px' }}
      transition={`background-color ${transitionMs}ms ease-in`}
    >
      {children}
    </Box>
  );
}
