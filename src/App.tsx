import { useState } from "react";

function App() {
  return (
    <div>
      <Fejlec></Fejlec>
      <Inputok></Inputok>
    </div>
  )
}

function Fejlec(){
  return <>
    <header>
      <h1>Feladat szövegfüggvényekkel</h1>
    </header>
  </>
}

function Inputok(){
   const [name, setName] = useState<string>("");
   const handleNagybetus=()=>{
    setName(name.toUpperCase())
   }
   const handleKisbetus=()=>{
    setName(name.toLowerCase())
   }
   const Visszaallit=()=>{
    setName("")
   }
  return (
      <>
      
      <form>
        <input 
        type="text" 
        placeholder="Nevet írd ide" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
      </form> 

        <p>Név: {name}</p>
        <p>{name.length} karakter</p>
        <button onClick={handleNagybetus}>Nagybetűs</button>
        <button onClick={handleKisbetus}>Kisbetűs</button>
        <button onClick={Visszaallit}>Visszaállít</button>
      </>
      
      
    )
}

export default App
