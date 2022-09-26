import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, icColor }) {
  return (
    <Box sx={{ variant: 'sectionHeader', textAlign: 'center' }}>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: icColor ? '#008B8B' : 'white',
          textAlign: 'center',
          fontFamily: 'Ubuntu'
        }}>
        {title}
      </Heading>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: icColor ? 'black' : 'white',
          fontFamily: 'Ubuntu',
          mt: 18
        }}>
        {slogan}
      </Text>
    </Box>
  );
}
