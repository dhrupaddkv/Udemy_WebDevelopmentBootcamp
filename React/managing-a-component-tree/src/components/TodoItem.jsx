import React from "react";

function TodoItem(props) {
  //   const [isDone, SetDone] = useState(false);
  //   function clickHandler(event) {
  //     SetDone(previousState => {
  //       if (previousState === true) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     });
  //   }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;
