import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({name, country}) {
  return (
    <div>
      <h1>Welcome to {country}!</h1>
      <p>You're in {name} now :D</p>
    </div>
  );
}

function Lake({name}){
  return <h1>{name}</h1>;
}

function SkiResort({name}){
  return <h1>{name}</h1>;
}

const lakeList = [ 
  {id: "56", name: "Lake Tahoe", trail: "23 km"}, 
  {id: "45", name: "Angora Lake", trail: "54 km"}, 
  {id: "98", name: "Shirley Lake", trail: "87 km"}, 
  {id: "67", name: "Lake Miagi", trail: "12 km"} 
];

function OtherComponents(){
  return(
    <>
    <Hello name="Brussels" country="Belgium"/>
    <Lake name="Salt Water Lake"/>
    <SkiResort name="Blue Mountain High"/>
    </>
  );
}

function App(props){
  //return props.season === "summer"? <Lake/>: props.season === "winter"? <SkiResort/>: <h1>Come back soon !</h1>;
  const [manager, setManager] = useState("Click to set");
  const [status, setStatus] = useState("Click to set");
  const [year, setYear] = useState(2020);
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  
  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);
  
  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);
  
  return(
    <>
    <div>
    <label>Phrase 1: 
        <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
      </label>
      <br/>
      <label>Phrase 2: 
        <input type="text" value={val2} onChange={e => setVal2(e.target.value)}/>
      </label>
    </div>
    <OtherComponents/>
    <h1><Checkbox/></h1>
    <h1>The year of {year}</h1>
    <button onClick={() => setYear(year + 1)}>New Year</button>

      <h1>Manager: {manager}</h1>
      <button onClick={() => setManager("Rachel")}>New Manager</button>

      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
      { props.lakes.map(lake => (
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Trail length: {lake.trail}</p>
        </div>
      ))}
    </>
  );
}

function GitHubUser({login}){
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${login}`)
    .then(res => res.json())
    .then(setData)
    .then(() => {
      console.log(JSON.stringify(data));
    })
    .catch(console.error);
  }, []);
  return !data? null: 
  <>
    <div>
    <p>UserID: {data.userId}</p>
    <h1>Title: {data.title}</h1>
    <p>Completed: {!data.completed}</p>
    </div>;
    -----------------
    <br/>
  </>
}

function Checkbox(){
  const [checked, toggle] = useReducer(checked => !checked,false);
  return (
    <>
      <input className=""
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked? "Checked":"Not checked"}
    </>
  );
}

ReactDOM.render(
  <>
    <Checkbox class="form-control btn-danger"/>
  </>,
  document.getElementById('root')
);
