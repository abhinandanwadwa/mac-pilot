import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import useEscape from "./hooks/useEscape";
import { prompts } from "./constant/const";

function App() {

  const [prompt, setPrompt] = useState("");

  const placeHolderPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  }

  useEscape();
  useEffect(() => {
    placeHolderPrompt();
    invoke("init_spotlight_window");
  }, []);

  return (
    <form action="" >
      <input style={{ width: '100.5%', fontSize: 20, height: '35px', marginBottom: '-15px', marginTop: '-8px', marginLeft: '-8px', border: 'none', borderRadius: "20px", outline: 'none', overflow: 'hidden', background: '#343541', padding: '5px', color: 'whitesmoke' }} type="text" name="text" placeholder={`🧠 ${prompt}`} onChange={placeHolderPrompt} />
    </form>
  );
}

export default App;
