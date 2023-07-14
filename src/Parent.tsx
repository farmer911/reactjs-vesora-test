import { useState } from "react";


let i =0
function Parent(props: any): JSX.Element {
    const [state, setState] = useState('')
    console.log("render", i++)
  return (
    <div className="container">
        <input value={state} onChange={(e) => setState(e.target.value)}/>
      {props.children}
    </div>
  );
}

export default Parent;
