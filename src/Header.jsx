import { useState } from 'react'


function Header({updateCVData}) {
  const [name, setName] = useState('Name');
  const [title, setTitle] = useState('Title');
  const [isEditMode, switchEditMode] = useState(false);

  function toggleEditMode(){
    switchEditMode(!isEditMode);
  }
  
  function editButtonClick(){
    toggleEditMode();
  }

  function submitButtonClick(){
    toggleEditMode();
    updateCVData({name, title});
  }

  return (
    <>
      <h3>Personal Info</h3>
      {isEditMode ?(
       <div>
        <p>

            <input
            type="text"
            value={name}
            onChange={(e) => 
                          {
                              {
                              setName(e.target.value);
                              updateCVData({name:e.target.value});
                              }
                          }
                      }
            />

        </p>
        

        <p>

            <input
            type="text"
            value={title}
            onChange={(e) => 
                          {
                            {
                            setTitle(e.target.value);
                            updateCVData({title:e.target.value});
                            }
                          }
                      }
            />

        </p>
        
        <button onClick={submitButtonClick}>Submit</button>

                
       </div> 
      ):
      (<div>
        <p>{name}</p>
        <p>{title}</p>
        <button onClick={editButtonClick}>Edit</button>
      </div>
      )
      }
    </>
  )
  }

export default Header
