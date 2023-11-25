import React, {useState} from "react";

const Task2 = () => {
        let [marks, setMarks] = useState([90, 49, 80, 51, 48]);

        const handleAdd = (key) => {
        let copyMarks = [...marks];
        copyMarks[key] += 1;
        setMarks(copyMarks)
        }

        const handleMinius = (key) => {
            let copyMarks = [...marks];
            copyMarks[key] -= 1;
            setMarks(copyMarks)
        }
    return (
        <>
            <div className="container my-5">
      <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
             Status:: #Passing: {marks.filter(num => num >=50).length}, #Failing: {marks.filter(num => num < 50).length} </span>
          </div>
        </nav>

       {marks.map((m, i) => {
         return (
           <div key={i}>
           <button onClick={(e) => handleAdd(i)}> + </button> <span style={{color: m >= 50 ? 'green' : 'red'}}>{m}</span> <button  onClick={(e) => handleMinius(i)}> - </button>
           </div>
         )
       })}
     </div>
        </>
    )
}

export default Task2;