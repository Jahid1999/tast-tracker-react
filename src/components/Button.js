function Button({color, text, onClick}) {
    // const onClick= () => {
    //     console.log('clicked')
    // }
    return (
      <button style={{backgroundColor: color}} className="btn" onClick={onClick}>
          {text}
      </button>
    );
  }

export default Button;