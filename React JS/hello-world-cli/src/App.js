import React from "react";
import Greeting from './components/greeting';
import Story from './components/story';
import SelfCounter from './components/self-counter'
import logo from './logo.svg';
import CurrentStory from './components/current-story';
import UserInfo from './components/user-info';
import GoogleSearch from "./components/google-search";
import GoogleSearchResult from "./components/google-search-result";


// function App() {
//   return (
//     <div>
//       <Greeting userName="Haider" rollNumber="2643" />
//       <Greeting userName="Ali" rollNumber="2644" />
//       <Greeting userName="Akram" rollNumber="2233" />
//       <Greeting userName="Umar" rollNumber="5555" />
//       <Greeting userName="Sarim" rollNumber="9113" />
//     </div>
//   );
// }









// function App() {
//   return (
//     <div>
//       <Story
//         imageSource={logo}
//         storyTitle="The boy who cried wolf"
//         moral="Lying breaks trust — even if you’re telling the truth, no one believes a liar."
//         story="Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!”"
//       />
//       <Story
//         imageSource={logo}
//         storyTitle="The boy who cried wolf"
//         moral="Lying breaks trust — even if you’re telling the truth, no one believes a liar."
//         story="Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!”"
//       />
//     </div>
//   )
// }












// function App() {
//   return <SelfCounter />;
// }















// function App() {
//   return <CurrentStory />
// }




















// function App() {
//   return (
//     <div>
//       <UserInfo
//         userName="Haider"
//         organisation="Saylani"
//         designation="Teacher"
//       />

//       <UserInfo
//         userName="Ahmed"
//         institute="KU"
//         course="BSCS"
//       />
//     </div>
//   )
// }

function App(){
  return <GoogleSearchResult />
}

export default App;
