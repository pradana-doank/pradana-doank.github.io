import { ColorProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { SiDart, SiJava, SiJavascript, SiTypescript } from 'react-icons/si'

interface IProgrammingMapper {
  icon: IconType
  name: string
  colorProps: ColorProps
}

export enum ProgrammingName {
  JAVA,
  JAVASCRIPT,
  TYPESCRIPT,
  DART,
}

export function programmingMapper(
  programmingName: ProgrammingName
): IProgrammingMapper {
  switch (programmingName) {
    case ProgrammingName.DART:
      return {
        icon: SiDart,
        name: 'Dart',
        colorProps: {
          color: 'blue.400',
        },
      }
    case ProgrammingName.JAVA:
      return {
        icon: SiJava,
        name: 'Java',
        colorProps: {
          color: 'red',
        },
      }
    case ProgrammingName.JAVASCRIPT:
      return {
        icon: SiJavascript,
        name: 'Javascript',
        colorProps: {
          color: 'yellow',
        },
      }
    case ProgrammingName.TYPESCRIPT:
      return {
        icon: SiTypescript,
        name: 'Typescript',
        colorProps: {
          color: 'blue',
        },
      }
  }
}
