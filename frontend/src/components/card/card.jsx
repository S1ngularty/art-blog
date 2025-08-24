import "./card.css"

function LogoHolder({source,altValue}){
    return (
        <>
            <div className="card-logo">
                <img src={source} alt={altValue} />
            </div>
        </>
    )
}

export default LogoHolder