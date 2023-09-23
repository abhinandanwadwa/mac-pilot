import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import useEscape from "./hooks/useEscape";

function App() {
  useEscape();
  useEffect(() => {
    invoke("init_spotlight_window");
  }, []);

  return (
      <input style={{ width: '100%', fontSize: 20, height: '25px', margin: 0, padding: 0 }} type="text" name="text" placeholder="Search..." />
  );
}

export default App;
