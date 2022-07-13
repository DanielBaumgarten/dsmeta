import { useState } from "react";
import NotificationButton from "./components/NotificationButton";
import logo from './logo.svg';

function App() {
  const [count, setCount]= useState(0);

  return(
    <>
    <NotificationButton />
    <NotificationButton />
    <NotificationButton />
    <NotificationButton />
    </>
  )
}

export default App
