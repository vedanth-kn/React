const DataTable = (props) => {
    const { data, c } = props
    return (
        <table className={c}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.designation}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default DataTable;