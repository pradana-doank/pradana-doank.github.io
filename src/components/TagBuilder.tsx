import { Tag, TagLabel, TagRightIcon, Wrap } from '@chakra-ui/react'
import { frameworkMapper, FrameworkName } from '../data/framework'
import { programmingMapper, ProgrammingName } from '../data/programming'
import { tagMapper, TagType } from '../data/tag'

interface TagBuilderProps {
  type: TagType
  framework: FrameworkName
  programming: ProgrammingName
}

const TagBuilder: React.FC<TagBuilderProps> = (props: TagBuilderProps) => {
  const { type, framework, programming } = props

  return (
    <Wrap>
      <Tag colorScheme={tagMapper(type).colorscheme}>
        <TagLabel>{tagMapper(type).name}</TagLabel>
        <TagRightIcon as={tagMapper(type).icon} />
      </Tag>
      <Tag colorScheme={frameworkMapper(framework).colorscheme}>
        <TagLabel>{frameworkMapper(framework).name}</TagLabel>
        <TagRightIcon as={frameworkMapper(framework).icon} />
      </Tag>
      <Tag colorScheme={programmingMapper(programming).colorScheme}>
        <TagLabel>{programmingMapper(programming).name}</TagLabel>
        <TagRightIcon as={programmingMapper(programming).icon} />
      </Tag>
    </Wrap>
  )
}

export default TagBuilder
