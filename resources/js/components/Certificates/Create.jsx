import React, { useState } from "react";
import axios from "axios";

const CreateCertificate = () => {
    const [certificate, setCertificate] = useState({
        name: "",
    });
    const handleInput = (e) => {
        e.preventDefault();
        setCertificate({ ...certificate, [e.target.name]: e.target.value });
    };

    const saveStudent = async (e) => {
        e.preventDefault();
        const data = {
            name: certificate.name,
        };
        await axios.post(`/api/certificates`, data).then((res) => {
            if (res.data.status === 200) {
                alert("Success!", res.data.message, "success");
                setCertificate({
                    name: "",
                });
            } else if (res.data.status === 422) {
                alert("invalid input");
            }
        });
    };
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
                                            value={certificate.name}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Save Certificate
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

export default CreateCertificate;
