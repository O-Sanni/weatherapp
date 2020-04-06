//checking if the the props is empty (null) the code was obtained from Angel's office hours on April 1
function nullCheck(props) {
    if(props.info === null) {
      return "empty";
    }

    return props.info;
  }

  export default nullCheck;
