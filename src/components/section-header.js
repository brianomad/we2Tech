import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isBlack }) {
  return (
    <Box sx={{ variant: 'sectionHeader', textAlign: 'center' }}>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isBlack ? 'black' : 'white',
          textAlign: 'center',
          fontFamily: 'Ubuntu'
        }}>
        {title}
      </Heading>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isBlack ? 'black' : 'white',
          fontFamily: 'Ubuntu'
        }}>
        {slogan}
      </Text>
    </Box>
  );
}
