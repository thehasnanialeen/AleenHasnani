//Show data

const DataDetails = ({ data }) => {
    return (
        <div className="data-details">
            <h4>{data.title}</h4>
            <p>{data.number}</p>
        </div>
    )
};

export default DataDetails;