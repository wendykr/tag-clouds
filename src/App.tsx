import { useState } from 'react';
import './App.scss';
import { tagsData } from './constants/tags';
import { CiCloudOn } from "react-icons/ci";
import { TagCloud } from './components/TagCloud/TagCloud';

const tagsStructure: string[] = tagsData;

function App() {
  const [tags, setTags] = useState<string[]>(tagsStructure);
  const [newTag, setNewTag] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
    setIsDisabled(event.target.value === '');
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setTags([...tags, newTag]);
    setNewTag('');
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
      <form className="form">
        <label className="form__label">
          <p className="form__label--name">Tag name: </p>
          <input className="form__field" value={newTag} name="name" onChange={handleChange} />
        </label>
        <button className="button" type="submit" onClick={handleSubmit} disabled={isDisabled}>Add</button>
        <button className="button" type="submit" onClick={handleDelete} disabled={tags.length === 0}>Delete</button>
      </form>
      <div className="container">
        <div className="head">
          <CiCloudOn className="icon-cloud" /> <span className="title">tag cloud</span>
        </div>
        <div className="main">
        {
          tags.length > 0 ? (
            tags.map((tag, index: number) => <TagCloud key={index} tag={tag} />)
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