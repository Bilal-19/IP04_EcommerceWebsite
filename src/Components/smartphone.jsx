export default function LatestSmartphone({ brandname, price, camera, storage, ram, processor, showImage }) {

    return (
        <>
            <div className="col-md-3">
                <div className="card m-2" style={{ width: "19rem" }}>
                    <img src={showImage} alt="product-image" className="card-img-top" height={250} width={200} />
                    <div className="card-body">
                        <p className="card-title mx-3 fw-bold mb-0">{brandname}</p>
                        <p className="card-text mx-3 mb-0 mt-0">Price: {price}</p>
                        <p className="card-text mx-3 mb-0 mt-0">Camera: {camera}</p>
                        <p className="card-text mx-3 mb-0 mt-0">Storage: {storage}</p>
                        <p className="card-text mx-3 mb-0 mt-0">RAM: {ram}</p>
                        <p className="card-text mx-3 mb-0 mt-0">Processor: {processor}</p>
                    </div>
                </div>
            </div>


        </>
    )
}