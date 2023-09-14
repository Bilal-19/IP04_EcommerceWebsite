import React from 'react'
import { smartphoneDB } from '../Database/LatestProductDB'
import LatestSmartphone from '../Components/smartphone'
import Header from '../Components/header'


export default function Smartphone() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p className="mx-2 fw-bold h5 text-center">Smartphone</p>
                    </div>

                    {smartphoneDB.map((item) => <LatestSmartphone key={item.id} brandname={item.brandName} price={item.price} camera={item.camera}
                        storage={item.storage} ram={item.ram} processor={item.processor} showImage={item.Image}
                    />)}
                </div>
            </div>


        </>
    )
}
