import { useEffect, useState } from "react";


function App() {
  const [avt, setAvt] = useState()
  const [show, setShow] = useState(false)
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvt(file)
  }

  function Content() {
    return (
      <input 
        type="file"
        onChange={handlePreviewAvatar}
        style={{padding: 32}}
      >
      </input>
    )
  }

  const handleClick = () => {
    setShow(!show)
  }

  useEffect(() => {
    return () => {
      avt && URL.revokeObjectURL(avt.preview)
    }
  }, [avt])
  
  return (
    <div>
      <button onClick={handleClick} style={{margin: 32}}>Toggle</button>
      {show && <Content />}
      <br></br>
      {avt && (
        <img src={avt.preview} alt="" width="30%" />
      )}
    </div>
  );
}

export default App;
