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
      <Tag color={tagMapper(type).colorProps.color}>
        <TagLabel>{tagMapper(type).name}</TagLabel>
        <TagRightIcon as={tagMapper(type).icon} />
      </Tag>
      <Tag color={frameworkMapper(framework).colorProps.color}>
        <TagLabel>{frameworkMapper(framework).name}</TagLabel>
        <TagRightIcon as={frameworkMapper(framework).icon} />
      </Tag>
      <Tag color={programmingMapper(programming).colorProps.color}>
        <TagLabel>{programmingMapper(programming).name}</TagLabel>
        <TagRightIcon as={programmingMapper(programming).icon} />
      </Tag>
    </Wrap>
  )
}

export default TagBuilder
