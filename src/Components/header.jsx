
export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-light" href="/">🛒 TechMart.pk</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link text-light" aria-current="page" href="/homepage">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">About</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href='/smartphone/all'>Smartphone</a></li>
                                    <li><a className="dropdown-item" href='/laptop/all'>Laptop</a></li>
                                    <li><a className="dropdown-item" href="#">Tablet</a></li>
                                    <li><a className="dropdown-item" href="#">Accessories</a></li>
                                    {/* <li><hr className="dropdown-divider" /></li> */}
                                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}