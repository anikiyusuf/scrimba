//ReactDOM.render(<p>Hello world</p>,document.getElementById("root"));
//ReactDOM.render(<ul><li>This </li><li>That</li></ul>,document.getElementById("root-2"));
//const h1 = document.getElementById("root")
//h1.textContent =" This is an important way to program"
//h1.className ="header"
//document.getElementById("root").append(h1)



//const h1 = document.createElement("h1")
//h1.textContent =" Hello world "
//h1.className ="header"
//console.log(h1)


//ReactDOM.render(<div>
  //  <h1 className="header"> This is JSX</h1>
   // <p>This is a paragraph</p>
//</div>,document.getElementById("root"))
/*
const navbar =(
    <nav>
        <h1>Yusuf's shop</h1>
        <ul>
            <li>Menu</li>
            <li>contact</li>
            <li>About</li> 
        </ul>
    </nav>
)
ReactDOM.render(navbar,document.getElementById("root"))*/


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)





