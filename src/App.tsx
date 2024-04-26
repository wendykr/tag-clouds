import { useState } from 'react';
import './App.scss';
import { tagsData } from './constants/tags';
import { CiCloudOn } from "react-icons/ci";

const tagsStructure: string[] = tagsData;

function App() {
  const [tags, setTags] = useState<string[]>(tagsStructure);

  console.log(tags);

  return (
    <>
      <div className="container">
        <div className="head">
          <CiCloudOn className="icon-cloud" /> <span className="title">tag cloud</span>
        </div>
        <div className="main">
          {
            tags.map((tag, index: number) => <p className="tag" key={index}>{tag}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App