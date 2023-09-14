import AllProduct from "../Components/allProduct";
import Header from "../Components/header";
import LatestSmartphone from "../Components/smartphone";
import { smartphoneDB } from "../Database/LatestProductDB";

export default function Homepage() {
    // console.log(LatestSmartphone)
    // This is a product listing page
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <p className="h4 text-center">WELCOME TO TECHMART.PK!</p>
                </div>

                <div className="row">
                    <AllProduct />
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p className="mx-2 fw-bold h5">Smartphone</p>
                    </div>

                    {smartphoneDB.map((item) => <LatestSmartphone key={item.id} brandname={item.brandName} price={item.price} camera={item.camera}
                        storage={item.storage} ram={item.ram} processor={item.processor} showImage={item.Image}
                    />)}


                    <div className="col-md-12">
                        <p className="mx-2 fw-bold h5">Laptop</p>
                    </div>

                    <div className="col-md-12">
                        <p className="mx-2 fw-bold h5">Tablet</p>
                    </div>

                </div>
            </div>
        </>
    )
}