import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import { HEADSHOT_FILENAME } from '../constants/fileNames';
import { EXTERNAL_LINKS } from '../constants/config';

const LINKS = ['About', 'Experience', 'Projects', 'Contact'];

interface NavLinkProps {
  children: ReactNode;
  url: string;
}

const NavLink = ({ children, url }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={url}
  >
    {children}
  </Link>
);

type ExternalLinkProps = {
  name: string;
  url: string;
};
const ExternalLink = ({ name, url }: ExternalLinkProps) => {
  return (
    <Link href={url} isExternal>
      <MenuItem>
        {name} <ExternalLinkIcon mx="2px" />
      </MenuItem>
    </Link>
  );
};

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamburgerIcon = isOpen ? <CloseIcon /> : <HamburgerIcon />;

  const { colorMode, toggleColorMode } = useColorMode();
  const colorModeValue = useColorModeValue('gray.100', 'gray.900');
  const toggleColorIcon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />;

  const linkComponents = LINKS.map((link) => (
    <NavLink key={link} url={'#' + link}>
      {link}
    </NavLink>
  ));

  const externalLinks = EXTERNAL_LINKS.map((link) => (
    <ExternalLink key={link.name} name={link.name} url={link.url} />
  ));

  return (
    <>
      <Box
        bg={colorModeValue}
        position={'sticky'}
        py={2}
        px={4}
        top={0}
        zIndex={10000}
        transition={'background-color 150ms ease-in'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={hamburgerIcon}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Brando Mora</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {linkComponents}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} marginRight={4}>
              {toggleColorIcon}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} src={`/imgs/${HEADSHOT_FILENAME}`} />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar size={'2xl'} src={`/imgs/${HEADSHOT_FILENAME}`} />
                </Center>
                <br />
                <Center>
                  <p>Your Future Employee ;)</p>
                </Center>
                <br />
                <MenuDivider />
                {externalLinks}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {LINKS.map((link) => (
                <NavLink key={link} url={'#' + link}>
                  {' '}
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
