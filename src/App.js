import './App.css';

import React, {useState, useEffect} from 'react'

import test from './test.json'
import Contentpage from './Contentpage'



function App() {
  const testEdit = Object.keys(test);
  const [contentid, setcontentid]=useState(-1)
  const [pageid, setpageid]=useState(0)
  const [pagestate, setpagestate]=useState(10)
  const [contentarr, setcontentarr]=useState(testEdit.slice(pageid,pageid+pagestate))
  const [pagelist, setpagelist] = useState(pagecount())
  
  
  function pagecount(){
    const length = test.length
    const pagenum=100//length%pagestate
    var arr = new Array(pagenum);
    for (var i = 0; i < arr.length; i++) {
      arr[i]=i
    }
    return arr
  }

  function page(index){
    setpageid(index)
    setcontentid(-1)
  }
  useEffect(()=>{
    setcontentarr(testEdit.slice(pageid*pagestate,pageid*pagestate+pagestate))
  },[pageid])
  return (
    
          
    <div className="App">
      <header className="App-header">
        <p>{contentid}</p>
        <p>{pageid}</p>
        
        {contentarr.map((t, index)=>
          (<div key={index}>
            
            {(contentid===index)? <button onClick={()=>setcontentid(-1)}>뒤로가기</button>
              :<button onClick={()=>setcontentid(index)}>{t}</button>}
            <Contentpage idx={index} arr={test} id={contentid} keys={t}/>
            
          </div>)
        )}
        <div>
          {pagelist.map((id, keys)=>
            (
              <button key={keys} onClick={()=>page(id)}>{id}</button>
            )
          )}
        </div>
      
        
      </header>
    </div>
  );
}

export default App;
