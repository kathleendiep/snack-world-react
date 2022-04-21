
export default class Archive extends React.Component { 




function HomeButton() {
    let history = useHistory()
  
    function handleClick() {
      history.push("/home")
    }
  
    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    )
  }