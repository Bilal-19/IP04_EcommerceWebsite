import { HomeProductDB } from "../Database/HomeProductDB";
import { Link } from 'react-router-dom'

export default function AllProduct() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <p className="text-center fw-bold h5">ALL PRODUCTS</p>
                </div>
            </div>

            <div className="row">
                {
                    HomeProductDB.map(item => {
                        return (
                            <div key={item.id} className="col-sm-12 col-md-3">
                                <div className="card m-2" style={{ width: "18rem" }}>
                                    <img src={item.displayImage} alt="product-image" className="card-img-top" height={150} width={220} />
                                    <div className="card-body">
                                        <p className="card-title text-center fw-bold">{item.category}</p>
                                        <Link className="btn btn-success" to={item.viewmorePath}>View More</Link>

                                    </div>
                                </div>
                            </div>

                        )

                    })
                }
            </div>

        </>

    )
}