import { ThemeTypings } from '@chakra-ui/react'
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
  colorscheme: ThemeTypings['colorSchemes']
}

export function frameworkMapper(frameworkName: FrameworkName): IFrameworkName {
  switch (frameworkName) {
    case FrameworkName.REACT:
      return {
        icon: SiReact,
        name: 'React',
        colorscheme: 'facebook',
      }
    case FrameworkName.SPRINGBOOT:
      return {
        icon: SiSpringboot,
        name: 'Springboot',
        colorscheme: 'whatsapp',
      }
    case FrameworkName.FLUTTER:
      return {
        icon: SiFlutter,
        name: 'Flutter',
        colorscheme: 'cyan',
      }
  }
}
