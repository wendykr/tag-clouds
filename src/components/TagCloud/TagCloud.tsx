import './TagCloud.scss';
import { TagsStructure } from '../../App';

export const TagCloud: React.FC<TagsStructure> = ({ name, color }) => {
  return (
    <div className="tag">
      <div className="tag__name">
        {name}
      </div>
      <span className="tag__stripe" style={{ backgroundColor: `#${color}` }}></span>
    </div>
  )
}