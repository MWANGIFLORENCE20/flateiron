import React from "react";

function Transactions(){
    return(
        <div>
            <hr/>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Descrition</th>
                     <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2019-12-9</td>
                    <td>movie</td>
                    <td>Entertainment</td>
                    <td>25</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Transactions