import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);

// const HomePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() =>  props.history.push('/topics')}>Topics</button>
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// }

// const TopicList = (props) => {
//   return (
//     <div>


//       <h1>TOPIC LIST PAGE</h1>
//       <Link to={`${props.match.url}` + 13}>TO TOPIC 13</Link> &nbsp;
//       <Link to={`${props.match.url}` + 15}>TO TOPIC 14</Link> &nbsp;
//       <Link to={`${props.match.url}` + 15}>TO TOPIC 15</Link> &nbsp;
//     </div>
//   );
// }

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       {/*     */}
//       <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
//     </div>
//   );
// }
const App = () =>
(
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/hats" component={HatsPage} />
    {/* <Route exact path="/blog/asdqw/topics" component={TopicList} />
    <Route path="/blog/asdqw/topics/:topicId" component={TopicDetail} />
    <Route exact path="/blog/topics" component={TopicList} />
    <Route path="/blog/topics/:topicId" component={TopicDetail} /> */}
  </div>
);

export default App;
