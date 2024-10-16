import { useState } from 'react'
import Header from './Header.jsx'
import Objective from './Objective.jsx';
import FullCV from './FullCV.jsx';
import './App.css'

function App() {

const [cvData, updateCVData] = useState (
  {
    name: 'Name', 
    title: 'Title',
    objective: 'One Liner'});
  
const updateCV = (newData) => {
  updateCVData((currentState) => ({
        ...currentState,
        ...newData
        })
  )
}
  
  
return(
<div class="container">
  <div class="left-panel">
        <div class="section">
            
            <Header 
            updateCVData = {updateCV}/>
        </div>

        <div class="section">
           <Objective 
           updateCVData = {updateCV}/>
        </div>

        <div class="section">
            <h3>Section 3</h3>
            
        </div>
    </div>

    <div class="right-panel">
      <FullCV 
      name = {cvData.name}
      title = {cvData.title}
      objective = {cvData.objective}
      
      />
    </div>
</div>
)
      

}

export default App
