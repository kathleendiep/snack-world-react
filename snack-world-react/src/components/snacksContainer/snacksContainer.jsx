import { useState, useEffect } from 'react'
import SingleSnackContainer from './singleSnackContainer/singleSnackContainer';
// scss install
import './snacksContainer.scss';
const SnacksContainer = (props) => {
  // CRUD 
    const [ snacks, setSnacks ] = useState([])
    const getSnacks = async () => {
      console.log("Hello");
      // this comes from api > url.py > 
      // connect from backend - where does localhost:8000 come from? 
      const getSnacksApiResponse = await fetch("http://localhost:8000/api/snacks")
      const parsedSnacks = await getSnacksApiResponse.json();
      // console.log(parsedContacts) use this to test if it's working 
      // set the State
      setSnacks(parsedSnacks)
    }
    return(
      <>
        <button onClick={getSnacks}> Get Snacks!</button>
        {/* returns the array */}
        { snacks.map((snack)=>{
            return <SingleSnackContainer key={`snack-${snack.id}`} snack={snack} > {JSON.stringify(snacks)}</SingleSnackContainer>
        })}
        <div class="outer-container">
          <div class="inner">
            <div class="box">
              <i class="fas fa-bowling-ball icon"></i>
              <h2>Box one</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem vero tempore molestias repellendus</p>
            </div>

            <div class="box">
              <i class="fas fa-quidditch icon"></i>
              <h2>Box two</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem vero tempore molestias repellendus</p>
            </div>
            <div class="box">
              <i class="fas fa-snowboarding icon"></i>
              <h2>Box three</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem vero tempore molestias repellendus</p>
            </div>
            <div class="box">
              <i class="fas fa-table-tennis icon"></i>
              <h2>Box four</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem vero tempore molestias repellendus</p>
            </div>
          </div>
        </div>
     </>
  )
}


export default SnacksContainer