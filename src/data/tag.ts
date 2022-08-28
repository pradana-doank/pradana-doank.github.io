import { ColorProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FaDesktop, FaRegWindowMaximize } from 'react-icons/fa'
import { SiAndroid } from 'react-icons/si'

interface ITagMapper {
  icon: IconType
  name: string
  colorProps: ColorProps
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
        colorProps: {
          color: 'whatsapp',
        },
      }

    case TagType.WEBSITE:
      return {
        icon: FaRegWindowMaximize,
        name: 'Website',
        colorProps: { color: 'linkedin' },
      }

    case TagType.DESKTOP:
      return {
        icon: FaDesktop,
        name: 'Desktop',
        colorProps: {
          color: '',
        },
      }
  }
}
