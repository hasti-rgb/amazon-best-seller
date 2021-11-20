import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//1
// function Greeting() {
//   return <h4>this is Hasti and this is my first component</h4>
// }

//2
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }

//3
// function Greeting() {
//   return (
//     <div>
//       <h4>this is Hasti and this is my first component</h4>
//     </div>
//   )
// }

//4
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }

//JSX Rules
// return single element
// div / section/ article or fragment
//use camelCase for html attribute
//className instead of class
//close every element
// formatting

//5
// function Greeting() {
//   return (
//     <section>
//       <div>
//         <h4>this is Hasti and this is my first component</h4>
//         <ul>
//           <li>
//             <a href='#'>hello world</a>
//           </li>
//         </ul>
//       </div>
//     </section>
//   )
// }

//Nested Components, React Tools
//6

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>Hasti Maleki</h2>

const Message = () => {
  return <p>this is my message</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
