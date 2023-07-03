import { ThemeTypings } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { SiDart, SiJavascript, SiTypescript } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

interface IProgrammingMapper {
  icon: IconType
  name: string
  colorScheme: ThemeTypings['colorSchemes']
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
        colorScheme: 'messenger',
      }
    case ProgrammingName.JAVA:
      return {
        icon: FaJava,
        name: 'Java',
        colorScheme: 'red',
      }
    case ProgrammingName.JAVASCRIPT:
      return {
        icon: SiJavascript,
        name: 'Javascript',
        colorScheme: 'yellow',
      }
    case ProgrammingName.TYPESCRIPT:
      return {
        icon: SiTypescript,
        name: 'Typescript',
        colorScheme: 'blue',
      }
  }
}
