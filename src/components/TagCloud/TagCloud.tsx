import './TagCloud.scss';

interface TagCloudProps {
  tag: string;
}

export const TagCloud: React.FC<TagCloudProps> = ({ tag }) => {
  return (
    <p className="tag" >{tag}</p>
  )
}