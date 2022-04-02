import React, { useEffect, useState } from "react";
import './Dashboard.css'

export const Dashboard = () => {

    const url = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(url).then((data) => {
            data.json().then((res) => {
                //  console.log(res) ;
                setUser(res);
            })
        })
    }, [])
    // console.log(user) ;


    return (
        <div id="body">
            <div>
                <h1>
                    GEEKTRUST ADMIN Dashboard
                </h1>
            </div>

            <div>
                <input type="text" placeholder="Search" id="search"/>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Sr. No</th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Role </th>
                            <th> Action </th>
                            <th><input type="checkbox" value="checked" /></th>
                        </tr>

                        {
                            user.map((e) => 
                                <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.role}</td>
                                <td>
                                    <span></span>
                                    <span>Delete</span>
                                </td>
                                <td><input type="checkbox" value="checked" /></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}