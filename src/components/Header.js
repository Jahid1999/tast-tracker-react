import Button from './Button'
function Header({title, onAddClick, showAdd}) {
     const onClick= () => {
        console.log('clicked')
    }
    return (
      <header className="header">
          <h1>{title}</h1>
          {
            onAddClick && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} 
            onClick={onAddClick}/>
          }
          
      </header>
    );
  }

  Header.defaultProps = {
      title: 'Task Tracker'
  }
  
  export default Header;