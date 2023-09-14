import React from 'react'
import Header from '../Components/header'
import { LaptopBD } from '../Database/LatestProductDB'
import LatestLaptop from '../Components/laptop'


export default function LaptopPage() {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p className="mx-2 fw-bold h5 text-center">Laptops</p>
                    </div>

                    {
                        LaptopBD.map((item, i) =>
                            <LatestLaptop key={i} data={item} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
