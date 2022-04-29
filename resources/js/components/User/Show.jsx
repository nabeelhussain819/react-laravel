import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import { Container, Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
const Show = () => {
    const [state, setState] = useState({
        users: "",
    });
    const getData = async (pageNumber = 1) => {
        const response = await (
            await fetch(`/api/users?page=${pageNumber}`)
        ).json();
        setState({ users: await response });
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(state);
    return (
        <div>
            <Container>
                <Table size="sm" className="mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date Of Birth</th>
                            <th>certificate</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.users.data
                            ? state.users.data.map((user) => (
                                  <tr key={user.id}>
                                      <td>{user.id}</td>
                                      <td>{user.name}</td>
                                      <td>{user.DOB}</td>
                                      <td>{user.number}</td>
                                      <td>{user.certificate.name}</td>
                                      <td>
                                          <UserDetails data={user} />
                                      </td>
                                  </tr>
                              ))
                            : "Loading..."}
                    </tbody>
                    <tfoot>
                        <Pagination
                            activePage={
                                state.users.current_page
                                    ? state.users.current_page
                                    : 0
                            }
                            itemsCountPerPage={
                                state.users.per_page ? state.users.per_page : 0
                            }
                            totalItemsCount={
                                state.users.total ? state.users.total : 0
                            }
                            onChange={(pageNumber) => {
                                getData(pageNumber);
                            }}
                            pageRangeDisplayed={8}
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText="First Page"
                            lastPageText="Last Lage"
                        />
                    </tfoot>
                </Table>
            </Container>
        </div>
    );
};

export default Show;
