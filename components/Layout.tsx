import { Box, Link } from '@chakra-ui/react';

export default function Layout(props: any) {
  return (
    <>
      <Box>
        <Box margin="auto" width={{ sm: 'full', md: '80em' }} minH="100vh">
          {props.children}
        </Box>
      </Box>
    </>
  );
}
