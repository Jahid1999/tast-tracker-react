import Button from './Button'
import {useLocation} from 'react-router-dom'
function Header({title, onAddClick, showAdd}) {
     const onClick= () => {
        console.log('clicked')
    }
    const location = useLocation();
    return (
      <header className="header">
          <h1>{title}</h1>
          { 
            location.pathname === '/' && (
              onAddClick && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} 
            onClick={onAddClick}/>
            )
            
          }
          
      </header>
    );
  }

  Header.defaultProps = {
      title: 'Task Tracker'
  }
  
  export default Header;