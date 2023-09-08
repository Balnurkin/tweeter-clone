import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './global.css'
import Navbar from "./Components/NavBar/NavBar";
import Container from './Components/Container/Container'
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/messages" element={<Messages />} />
    <Route path="/lists" element={<Lists />}/>
    <Route path="/verified" element={<Verified />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/more" element={<More />} />
  </Route>
))

function Notifications(){
  return(
    <p>Notifications</p>
  )
}

function Messages(){
  return(
    <p>Messages</p>
  )
}

function Lists(){
  return(
    <p>Lists</p>
  )
}

function Verified(){
  return(
    <p>Verified</p>
  )
}

function More(){
  return(
    <p>More</p>
  )
}

function RootLayout(){
  return <Container>
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  </Container>
  
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
