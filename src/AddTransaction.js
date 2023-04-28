import React from "react";

function AddTransactions({
    handleSubmit
}){

    
    return(
        <form className="transactions" onSubmit={handleSubmit}>
            <label>Date</label>
            <input type="text" placeholder="date"></input>
            <input type="text" placeholder="description"></input>
            <input type="text" placeholder="category"></input>
            <input type="text" placeholder="amount"></input>
            <button type="submit">Add Transactions</button>
        </form>
    )
}

export default AddTransactions