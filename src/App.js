import "./App.css";
// import { StyleSheet } from "react-native";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import homepage from "./components/Home";
import resumepage from "./components/Resume";
import projectpage from "./components/Project";
import contactpage from "./components/Contact";

function App() {
  const About = homepage;
  const Resume = resumepage;
  const Project = projectpage;
  const Contact = contactpage;

  return (
    <div className="App">
      <Router>
        <header className="header">
          <a href="#default" className="logo">
            Nonthawan | Portfolio
          </a>
          <div className="header-right">
            <a href="/">About</a>
            <a href="/resume">Resume</a>
            <a href="project">Project</a>
            <a href="contact">Contact</a>
          </div>
        </header>
        <div className="App-header">
          <Routes>
            <Route exact path="/" element={<About />}></Route>
            <Route exact path="/resume" element={<Resume />}></Route>
            <Route exact path="/project" element={<Project />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        
      </Router>
      <footer className="footer">
          <p>@Create by Nonthawan Sripru</p>
          <p>Call: 098-1542079 | E-mail: nonthawan.sp@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

// const styles = StyleSheet.create({
//   footer: {
//     display: "grid",
//     flexDirection: "row",
//     backgroundColor: "red",
//     padding: 20,
//   },
// });
