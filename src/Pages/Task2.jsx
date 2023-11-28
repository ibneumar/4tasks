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
        <div className="section brown">
        <div className="container">

        <div className="h3" style={{marginBottom: '20px', textAlign: 'center'}}>
                      Passed {marks.filter(num => num >=50).length}, Failed: {marks.filter(num => num < 50).length} 
        </div>
          
            <span style={{margin: '0 auto', display: 'table'}}>
                    {marks.map((m, i) => {
                      return (
                          <div key={i} >
                            <button style={{marginBottom:'5px'}} className="btn btn-primary" onClick={(e) => handleAdd(i)}> + </button> <span style={{color: m >= 50 ? 'green' : 'red'}}>{m}</span> <button style={{marginBottom:'5px'}} className="btn btn-warning"  onClick={(e) => handleMinius(i)}> - </button>
                            <br />
                        </div>
                      )
                    })}
              </span>
        </div>
     </div>
     
        </>
    )
}

export default Task2;