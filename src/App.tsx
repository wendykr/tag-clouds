import { useState } from 'react';
import './App.scss';
import { tagsData } from './constants/tags';
import { CiCloudOn } from "react-icons/ci";
import { TagCloud } from './components/TagCloud/TagCloud';

const tagsStructure: string[] = tagsData;

function App() {
  const [tags, setTags] = useState<string[]>(tagsStructure);

  return (
    <>
      <div className="container">
        <div className="head">
          <CiCloudOn className="icon-cloud" /> <span className="title">tag cloud</span>
        </div>
        <div className="main">
          {
            tags.map((tag, index: number) => <TagCloud key={index} tag={tag}/>)
          }
        </div>
      </div>
    </>
  )
}

export default App