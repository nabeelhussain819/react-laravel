import React, { useState, useEffect } from "react";
import myData from "./Form";
import axios from "axios";

const Create = () => {
    const [studentInput, setStudent] = useState({
        name: "",
        DOB: "",
        certificate_id: "",
        number: "",
    });
    const [certificate, setCertificate] = useState([]);

    const handleInput = (e) => {
        e.preventDefault();
        setStudent({ ...studentInput, [e.target.name]: e.target.value });
    };
    const saveStudent = async (e) => {
        e.preventDefault();
        const data = {
            name: studentInput.name,
            DOB: studentInput.DOB,
            certificate_id: studentInput.certificate_id,
            number: studentInput.number,
        };
        await axios.post(`/api/users`, data).then((res) => {
            if (res.data.status === 200) {
                alert("Success!", res.data.message, "success");
                setStudent({
                    name: "",
                    DOB: "",
                    certificate_id: "",
                    number: "",
                });
            } else if (res.data.status === 422) {
                alert("invalid input");
            }
        });
    };
    useEffect(() => {
        const getData = async () => {
            const response = await (await fetch("api/certificates")).json();
            setCertificate(response);
        };
        getData();
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <form onSubmit={saveStudent}>
                                    <div className="form-group mb-3">
                                        <label>Student Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleInput}
                                            value={studentInput.name}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student DOB</label>
                                        <input
                                            type="date"
                                            name="DOB"
                                            onChange={handleInput}
                                            value={studentInput.DOB}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Certificate</label>
                                        <select
                                            name="certificate_id"
                                            className="form-control"
                                            onChange={handleInput}
                                            value={studentInput.certificate}
                                        >
                                            {certificate.map((item) => {
                                                return (
                                                    <>
                                                        <option value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Phone</label>
                                        <input
                                            type="text"
                                            name="number"
                                            onChange={handleInput}
                                            value={studentInput.number}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Save Student
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
