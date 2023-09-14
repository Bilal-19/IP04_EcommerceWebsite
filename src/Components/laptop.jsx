export default function LatestLaptop(props) {
    console.log(props.data.id)

    return (
        <>
            <div className="col-md-3">
                <div className="card m-2" style={{ width: "19rem" }}>
                    <img src={props.data.Image} alt="product-image" className="card-img-top" height={250} width={200} />
                    <div className="card-body">
                        <p className="card-title fw-bold mb-0 text-center">{props.data.brandName}</p>
                        <p className="card-text mx-3 mb-0 mt-0">- Processor: {props.data.processor}</p>
                        <p className="card-text mx-3 mb-0 mt-0">- Operating Systen: {props.data.operatingSystem}</p>
                        <p className="card-text mx-3 mb-0 mt-0">- Storage: {props.data.storage}</p>
                        <p className="card-text mx-3 mb-0 mt-0">- Graphics: {props.data.graphics}</p>
                    </div>
                </div>
            </div>


        </>
    )
}