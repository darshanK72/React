function Card({children}){
    return (
        <>
            <div className="card col-3 m-4 shadow-sm">
                {children}
            </div>
        </>
    )
}

export default Card