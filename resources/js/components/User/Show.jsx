import React, { useEffect, useState } from "react";

const Show = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await (await fetch("api/users")).json();
            setData(response);
        };
        getData();
    }, []);
    console.log(data);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>certificate</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.DOB}</td>
                                <td>{item.certificate.name}</td>
                                <td>{item.number}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Show;
