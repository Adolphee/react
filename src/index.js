import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import "./index.css";

const randomizer = Math.ceil(Math.random(100) * 100);
let url = `https://picsum.photos/300/400?blur=5?random=${randomizer}`;

function Hello({ name, country }) {
  return (
    <div>
      <h1>Welcome to {country}!</h1>
      <p>You're in {name} now :D</p>
    </div>
  );
}


function Lake({ name }) {
  return <h1>{name}</h1>;
}

function SkiResort({ name }) {
  return <h1>{name}</h1>;
}

const lakeList = [
  { id: "56", name: "Lake Tahoe", trail: "23 km" },
  { id: "45", name: "Angora Lake", trail: "54 km" },
  { id: "98", name: "Shirley Lake", trail: "87 km" },
  { id: "67", name: "Lake Miagi", trail: "12 km" },
];

function OtherComponents() {
  return (
    <>
      <Hello name="Brussels" country="Belgium" />
      <Lake name="Salt Water Lake" />
      <SkiResort name="Blue Mountain High" />
    </>
  );
}

function App(props) {
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

  return (
    <>
      <div>
        <label>
          Phrase 1:
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phrase 2:
          <input
            type="text"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          />
        </label>
      </div>
      <OtherComponents />
      <h1>
        <Checkbox />
      </h1>
      <h1>The year of {year}</h1>
      <button onClick={() => setYear(year + 1)}>New Year</button>

      <h1>Manager: {manager}</h1>
      <button onClick={() => setManager("Rachel")}>New Manager</button>

      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
      {props.lakes.map((lake) => (
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Trail length: {lake.trail}</p>
        </div>
      ))}
    </>
  );
}

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${login}`)
      .then((res) => res.json())
      .then(setData)
      .then(() => {
        console.log(JSON.stringify(data));
      })
      .catch(console.error);
  }, []);
  return !data ? null : (
    <>
      <div>
        <p>UserID: {data.userId}</p>
        <h1>Title: {data.title}</h1>
        <p>Completed: {!data.completed}</p>
      </div>
      <br />
    </>
  );
}

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  const randomizer = Math.ceil(Math.random(100) * 100);
  let url = `https://picsum.photos/300/400?blur=5?random=${randomizer}`;
  console.log(url);
  return (
    <>
      <div className="card bg-dark text-white">
        <img src={url} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </>
  );
}

function Carousel() {
  const identifier = uuidv4();
  return (
    <>
      <div
        id={'carousel'+identifier}
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={url} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={url} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={url} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href={'#carousel'+identifier}
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={'#carousel'+identifier}
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

function ArticleCard() {
  return (
    <div className="article-card col-md-4 col-sm-6 col-xs-12 col-lg-3 col-xl-2 col-padding animate-box" data-animate-effect="fadeInLeft">
      <Carousel />
      <CardData
        title="My Title"
        author="First Name"
        category="My Spirit"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officiis officia fuga eius iusto blanditiis"
        likes="987"
      />
    </div>
  )
}

function ArticleMeta({author, category, likes}) {
  return <span><small>by {author} </small> / <small> {category}</small> / <small> <i className="icon-comment"></i> {likes}</small></span>
}

function CardData({ title, author, category, likes, description }) {
  return (
    <div className="desc">
      <a href="#"><p>{title}</p></a>
      <ArticleMeta author={author} category={category} likes={likes}/>
      <p>{description}</p>
      <a href="#" className="lead"><small>Read More</small> <i className="icon-arrow-right3"></i></a>
    </div>
  );
}

function Cards({ amount }) {
  amount -= 1;
  const a = [amount];
  for (let index = 0; index < amount; index++) {
    console.log(amount);
    a.push(index);
  }
  return (
    <>
      {a.map((v, i) => (
        <ArticleCard key={i} />
      ))}
    </>
  );
}

ReactDOM.render(
  <div className="row">
    <Cards amount={30} />
  </div>,
  document.getElementById("root")
);
