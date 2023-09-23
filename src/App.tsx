import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import useEscape from "./hooks/useEscape";

function App() {
  useEscape();
  useEffect(() => {
    invoke("init_spotlight_window");
  }, []);

  return (
    <form action="">
      <input style={{ width: '100.5%', fontSize: 20, height: '35px', marginBottom: '-15px', marginTop: '-8px', marginLeft: '-8px', border: 'none', outline: 'none', overflow: 'hidden', background: '#ffffff47', padding: '5px', color: 'whitesmoke' }} type="text" name="text" placeholder="Start Typing" />
    </form>
  );
}

export default App;
