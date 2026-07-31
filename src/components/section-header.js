import React from 'react';
import { Box, Text, Heading } from 'theme-ui';
import Reveal from './reveal';

export default function SectionHeader({ title, slogan, eyebrow, icColor }) {
  return (
    <Reveal>
      <Box sx={{ variant: 'sectionHeader', textAlign: 'center' }}>
        {eyebrow && (
          <Text
            as="p"
            sx={{
              color: icColor ? 'teal' : 'cyan',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: 0,
              fontWeight: 'bold',
              fontFamily: 'Ubuntu',
              mb: 2,
            }}>
            {eyebrow}
          </Text>
        )}
        <Heading
          as="h2"
          sx={{
            variant: 'sectionHeader.title',
            color: icColor ? 'teal' : 'white',
            textAlign: 'center',
            fontFamily: 'Ubuntu'
          }}>
          {title}
        </Heading>
        {slogan && (
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
        )}
      </Box>
    </Reveal>
  );
}
