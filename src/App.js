import './App.css';

function App() {


    const createProjects = () => {

    const projectLinks = {
        "https://github.com/AJM432/Differential-Equation-Visualizer": "https://user-images.githubusercontent.com/49791407/210035641-f62a010e-627c-4e4b-a758-2c360f1080b8.png",

        "https://github.com/AJM432/Solar-Synesthesia": "https://user-images.githubusercontent.com/49791407/210034549-7bfaa1bf-010d-4d73-9fed-8ce3aaf24121.png",

        "https://github.com/AJM432/Solar-System-Simulator": "https://user-images.githubusercontent.com/49791407/186054817-eafde350-7d1c-4bef-9ea4-9d9cf99cb190.png",

        "https://github.com/AJM432/Interactive-Sorting-Algorithms": "https://user-images.githubusercontent.com/49791407/186274074-e914364c-2f00-4714-b848-07bc9059eeb9.png",

        "https://github.com/AJM432/Elastic-Collision-Simulation": "https://user-images.githubusercontent.com/49791407/186037770-d505c44c-3725-43bd-ba46-d08035277255.png",

        "https://github.com/AJM432/3d-Function-Grapher": "https://user-images.githubusercontent.com/49791407/186008559-3df1f30c-fd2b-43e9-9b5a-d1902cfdab36.png",

        "https://github.com/AJM432/Mandelbrot-Viewer": "https://user-images.githubusercontent.com/49791407/185980134-1a7b4c4b-f68b-4e9a-abc9-f02ce9786bf1.png",

        "https://github.com/AJM432/Discord-Bot": "https://user-images.githubusercontent.com/49791407/185975164-4fa2c354-e457-4d10-8f5b-2feee0ad0cd7.png",

        "https://github.com/AJM432/2048-Clone": "https://user-images.githubusercontent.com/49791407/185968545-e9f75d85-5f66-4174-9906-5149101e06f0.png"

      
    } 
            const projects = [];

            for (var key in projectLinks){
            projects.push(
            <a key={key} href={key}>
            <img  src={projectLinks[key]} alt="Github Project" className="projectImage"></img>
            </a>
            );
            // projects.push(<hr></hr>);
            }
            return projects;
    }

  return (
    <div>
    <a href="/">
        <img src="https://avatars.githubusercontent.com/u/49791407?v=4" alt="Logo AJM" className="nav-img icon"></img>
    </a>
    <nav className="topnav">
        <a href="#about" className="nav-item disappear-mobile">About</a>
        <a href="#projects" className="nav-item disappear-mobile">Projects</a>
        <a href="#contact" className="nav-item disappear-mobile">Contact</a>
    </nav>

    <section id="about">
        <div>
            <h1>
                Hi i'm Alvin.
            </h1>
        </div>

          <p className="intro-summary">
        I am a student at the University of Waterloo majoring
         in computer engineering and have a strong interest in building projects. I am excited to seek out new 
         opportunities to learn and grow in my field.
         </p>
    </section>

    <section id="projects">

        <h1>
            Projects
        </h1>

        <div className="img-gallery">
          {createProjects()}
            {/* <a href="https://github.com/AJM432/2048-Clone">
            <img src="https://user-images.githubusercontent.com/49791407/185968545-e9f75d85-5f66-4174-9906-5149101e06f0.png" alt="Github Project"></img>
            </a>

            <hr></hr>

            <a href="https://github.com/AJM432/Interactive-Sorting-Algorithms">
            <img src="https://user-images.githubusercontent.com/49791407/186274074-e914364c-2f00-4714-b848-07bc9059eeb9.png" alt="Github Project"></img>
            </a>

            <hr></hr>

            <a href="https://github.com/AJM432/3d-Function-Grapher">
            <img src="https://user-images.githubusercontent.com/49791407/186008559-3df1f30c-fd2b-43e9-9b5a-d1902cfdab36.png" alt="Github Project"></img>
            </a>

            <hr></hr> */}
        </div>

    </section>

    <section id="contact">

        <div>
            <ul className="contact-links">
                <li>
                    <a href="mailto:alvinjosematthew@gmail.com">
                        <i className="fab fa-google fa-2xl icon" ></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/AJM432">

                        {/* <i className="fa-brands fa-square-github fa-2xl icon"></i> */}
                        <i className="fab fa-github fa-2xl icon"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alvin-matthew">

                        <i className="fab fa-linkedin fa-2xl icon"></i>
                    </a>
                </li>

                <li>
                    <a href="https://blog.alvinmatthew.me">

                        <i className="fab fa-hashnode fa-2xl icon"></i>
                    </a>
                </li>

            </ul>
        </div>

    </section>

    <footer>
        <p>
            Built and designed by Alvin Matthew
        </p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
        integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossOrigin="anonymous"></script>
    <script src="script.js"></script>
</div>
  );
}

export default App;
