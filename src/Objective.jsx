import { useState } from 'react'


function Objective({updateCVData}) {
  const [objective, setObjective] = useState('One Liner');
  const [isEditMode, switchEditMode] = useState(false);

  function toggleEditMode(){
    switchEditMode(!isEditMode);
  }
  
  function editButtonClick(){
    toggleEditMode();
  }

  function submitButtonClick(){
    toggleEditMode();
    updateCVData({objective});
  }

  return (
    <>
      <h3>Objective</h3>
      {isEditMode ?(
       <div>
        <p>

            <textarea
            type="text"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            />
            

        </p>
        

      
        <button onClick={submitButtonClick}>Submit</button>

                
       </div> 
      ):
      (<div>
        <p>{objective}</p>
        <button onClick={editButtonClick}>Edit</button>
      </div>
      )
      }
    </>
  )
  }

export default Objective
