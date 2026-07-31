/** @jsx jsx */
import { jsx, Image, Box, Text } from 'theme-ui';
import { motion } from "framer-motion";

export default function FeatureCardColumn({
  step,
  altText = 'default alt text',
  title,
  text,
  imgSrc
}) {
  return (
    <motion.div className="card" whileHover={{
      scale: 1.05,
      transition: {
        duration: .2
      }
    }}>
      <Box sx={styles.card}>
        <Image
          src={imgSrc}
          alt={altText}
          sx={styles.img} />
        <Box sx={styles.wrapper}>
          <Text sx={styles.wrapper.step}>{step}</Text>
          <Text sx={styles.wrapper.title}>{title}</Text>
          <Text sx={styles.wrapper.subTitle}>{text}</Text>
        </Box>
      </Box>
    </motion.div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
  img: {
    width: ['140px', null, null, '170px', '190px'],
    height: 'auto',
    mb: 4,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    step: {
      fontSize: 1,
      fontWeight: 'bold',
      letterSpacing: '2px',
      color: 'cyan',
      mb: 2,
      fontFamily: 'Ubuntu',
    },
    title: {
      fontSize: 3,
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
      color: 'white',
      fontFamily: 'Ubuntu',
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
      color: 'white',
      fontFamily: 'Ubuntu',
    },
  },
};
