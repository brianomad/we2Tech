/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';
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
      scale: 1.2,
      transition: {
        duration: .2
      }
    }}>
      <Box sx={styles.card}>
        {/* <Image src={src} alt={altText} sx={styles.img} /> */}
        {/* <Text style={styles.title}>{step}</Text> */}
        <Box sx={styles.wrapper}>
          {/* <Text sx={styles.wrapper.title}>{title}</Text>
        <Text sx={styles.wrapper.subTitle}>{text}</Text> */}
          <Image
            src={imgSrc}
            alt="Thumbnail" />
        </Box>
      </Box>
    </motion.div>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    // flexDirection: 'column',
    // mb: -1,
    // textAlign: ['center', null, 'left'],
    // px: [4, null, 0],
  },
  title: {
    color: '#00FFFF'
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    width: ['80px', null, null, '90px', null, 'auto'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
      color: '#00FFFF',
      fontFamily: 'Ubuntu'
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
      color: 'white',
      fontFamily: 'Ubuntu'
    },
  },
};
