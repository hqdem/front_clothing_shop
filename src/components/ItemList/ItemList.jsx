import React from 'react'
import Item from "./Item/Item.jsx"
import Loading from "../Loading/Loading.jsx"
import {useQuery} from "react-query"
import {getAllItems} from "../../api/items/itemsApi.js"
import {Link} from "react-router-dom"

const ItemList = () => {
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['items'],
        queryFn: getAllItems
    })
    if (isLoading) {
        return <Loading/>
    }

    return (
        <div className="main__content">
            {data.data.map((item) => <Link key={item.id} to={`/items/${item.id}`}><Item item={item}/></Link>)}
        </div>
    )
}

export default ItemList
