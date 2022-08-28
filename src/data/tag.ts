import { ThemeTypings } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FaDesktop, FaRegWindowMaximize } from 'react-icons/fa'
import { SiAndroid } from 'react-icons/si'

interface ITagMapper {
  icon: IconType
  name: string
  colorscheme: ThemeTypings['colorSchemes']
}

export enum TagType {
  ANDROID,
  WEBSITE,
  DESKTOP,
}

export function tagMapper(tag: TagType): ITagMapper {
  switch (tag) {
    case TagType.ANDROID:
      return {
        icon: SiAndroid,
        name: 'Android',
        colorscheme: 'whatsapp',
      }

    case TagType.WEBSITE:
      return {
        icon: FaRegWindowMaximize,
        name: 'Website',
        colorscheme: 'linkedin',
      }

    case TagType.DESKTOP:
      return {
        icon: FaDesktop,
        name: 'Desktop',
        colorscheme: 'blackAlpha',
      }
  }
}
