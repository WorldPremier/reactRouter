import React from 'react';

const styles = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={styles} onClick={onClick}>
    {value}
  </button>
);

export default Square;

// import React from 'react';

// ////examples of props structure from an object:
// ////Do this in case you do not structure your props. regarding  start line 12 
// // const props = {
// //     onClick: () => "function",
// //     value: "x"
// // };
// // const { value } = props;
// // // to access the value type the following.
// // props.value;

// //looks like html but this is really JSX
// const Square = (props) => (
//     <button onClick = {props.onClick}>
//         {props.value}
//     </button>
// );

// // export default Square;

// // const Square = ({ value, onClick}) => (
// // <button onClick = {props.onClick}>
// //     {props.value}
// // </button>
// // );

// export default Square;

//*********************************************************** */
