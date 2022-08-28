import { Box, Heading, Text } from '@chakra-ui/react'

interface InfoTextProps {
  title: string
  subtitle: string
}

const InfoText: React.FC<InfoTextProps> = (props: InfoTextProps) => {
  const { title, subtitle } = props
  return (
    <Box>
      <Heading>{title}</Heading>
      <Text maxW={[200, 'auto']} fontSize="sm" fontWeight="medium">
        {subtitle}
      </Text>
    </Box>
  )
}

export default InfoText
