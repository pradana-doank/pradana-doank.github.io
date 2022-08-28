import { ColorProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { SiFlutter, SiReact, SiSpringboot } from 'react-icons/si'

export enum FrameworkName {
  REACT,
  SPRINGBOOT,
  FLUTTER,
}

interface IFrameworkName {
  icon: IconType
  name: string
  colorProps: ColorProps
}

export function frameworkMapper(frameworkName: FrameworkName): IFrameworkName {
  switch (frameworkName) {
    case FrameworkName.REACT:
      return {
        icon: SiReact,
        name: 'React',
        colorProps: {
          color: 'blue.100',
        },
      }
    case FrameworkName.SPRINGBOOT:
      return {
        icon: SiSpringboot,
        name: 'Springboot',
        colorProps: {
          color: 'green',
        },
      }
    case FrameworkName.FLUTTER:
      return {
        icon: SiFlutter,
        name: 'Flutter',
        colorProps: {
          color: 'lightblue',
        },
      }
  }
}
