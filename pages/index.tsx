import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react';
import Layout from 'components/Layout';

// Chakra UI default breakpoints are set as "min-width" array values in Chakra theme
// breakpoints: ["30em", "48em", "62em", "80em"],
// You can set style values to every breakpoint

function HomePage() {
  return (
    <Layout>
      <Flex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flexDirection="column" m={8}>
          <Flex alignItems="center" h={['auto', 'auto', 'auto', 'auto']}>
            <Heading>
              兄弟事業{' '}
              <Text color="brand.300" as="span">
                Kyoudai Industries
              </Text>
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default HomePage;
