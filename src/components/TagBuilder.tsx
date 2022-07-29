import { Box, Tag, TagLabel, TagRightIcon, Wrap } from '@chakra-ui/react'
import { TagType } from '../data/tag'
import {
  FaAndroid,
  FaDesktop,
  FaJava,
  FaRegWindowMaximize,
} from 'react-icons/fa'
import {
  SiDart,
  SiFlutter,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiReact,
  SiSpring,
  SiTypescript,
} from 'react-icons/si'
import { IconType } from 'react-icons'
import { FrameworkType } from '../data/tech'

interface ITagBuilder {
  type: TagType
  framework: FrameworkType
}

const TagBuilder: React.FC<ITagBuilder> = ({ type, framework }) => {
  const frameworkMapping = (): {
    name: string
    icon: IconType
    color: string
    programming: { name: string; icon: IconType; color: string }[]
  } => {
    switch (framework) {
      case FrameworkType.REACT:
        return {
          name: 'React',
          color: 'blue.400',
          programming: [
            { name: 'Javascript', icon: SiJavascript, color: 'yellow.300' },
            { name: 'Typescript', icon: SiTypescript, color: 'blue.700' },
          ],
          icon: SiReact,
        }
      case FrameworkType.SPRINGBOOT:
        return {
          name: 'Springboot',
          color: 'green.300',
          programming: [
            { name: 'Java', icon: SiJava, color: 'red' },
            { name: 'Kotlin', icon: SiKotlin, color: 'purple.600' },
          ],
          icon: SiSpring,
        }
      case FrameworkType.FLUTTER:
        return {
          name: 'Flutter',
          color: 'blue.400',
          programming: [{ name: 'Dart', icon: SiDart, color: 'blue.700' }],
          icon: SiFlutter,
        }
    }
  }

  const tagMapping = (): [
    icon: IconType,
    name: string,
    colorScheme: string
  ] => {
    switch (type) {
      case TagType.ANDROID:
        return [FaAndroid, 'Android', 'whatsapp']
      case TagType.WEBSITE:
        return [FaRegWindowMaximize, 'Windows', 'linkedin']
      case TagType.DESKTOP:
        return [FaDesktop, 'Desktop', '']
    }
  }
  const [icon, name, colorScheme] = tagMapping()
  const programmingLangs = frameworkMapping()

  return (
    <Wrap>
      <Tag colorScheme={colorScheme}>
        <TagLabel>{name}</TagLabel>
        <TagRightIcon as={icon} />
      </Tag>
      <Tag color={programmingLangs.color}>
        <TagLabel>{programmingLangs.name}</TagLabel>
        <TagRightIcon as={programmingLangs.icon} />
      </Tag>
      {programmingLangs.programming.map((pg, index) => {
        return (
          <Tag key={index} color={pg.color}>
            <TagLabel>{pg.name}</TagLabel>
            <TagRightIcon as={pg.icon} />
          </Tag>
        )
      })}
    </Wrap>
  )
}

export default TagBuilder
