import { useState } from "react";
import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";



function App() {
  const [count, setCount]= useState(0);

  return(
    <>
    <Header />
    <NotificationButton />
    <NotificationButton />
    <NotificationButton />
    <NotificationButton />
    </>
  )
}

export default App
