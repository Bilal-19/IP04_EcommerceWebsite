import AllProduct from "../Components/allProduct";
import Header from "../Components/header";

export default function Homepage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <p className="h4 text-center">WELCOME TO TECHMART.PK!</p>
                    <i className="fw-bold text-center">We deals in smartphone, laptop, tablet and mobile accessories.</i>
                </div>

                <div className="row mt-5">
                    <AllProduct />
                </div>
            </div>
        </>
    )
}