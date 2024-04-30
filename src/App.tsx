import { useState } from 'react';
import './App.scss';
import { tagsData } from './constants/tags';
import { CiCloudOn } from "react-icons/ci";
import { TagCloud } from './components/TagCloud/TagCloud';
import { Form } from './components/Form/Form';

export interface TagsStructure {
  name: string;
  color: string;
}

function App() {
  const [tags, setTags] = useState<TagsStructure[]>(tagsData);
  const [newTag, setNewTag] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
    setIsDisabled(event.target.value === '');
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setTags([...tags, {name: newTag, color: 'cfd7e6'}]);
    setNewTag('');
    setIsDisabled(true);
  }

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setNewTag('');
    setIsDisabled(true);
    if (tags.length > 0) {
      const updatedTags = tags.slice(1);
      setTags(updatedTags);
    }
  }

  return (
    <>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} handleDelete={handleDelete} isDisabled={isDisabled} newTag={newTag} tags={tags} />
      <div className="container">
        <div className="head">
          <CiCloudOn className="icon-cloud" /> <span className="title">tag cloud</span>
        </div>
        <div className="main">
        {
          tags.length > 0 ? (
            tags.map((tag, index: number) => <TagCloud key={index} name={tag.name} color={tag.color} />)
          ) : (
            <p>No found tags</p>
          )
        }
        </div>
      </div>
    </>
  )
}

export default App