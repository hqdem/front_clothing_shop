import React, {useEffect} from 'react'
import Item from "./Item/Item.jsx"
import Loading from "../Loading/Loading.jsx"
import {useQuery} from "react-query"
import {getAllItems} from "../../api/items/itemsApi.js"
import {Link, Route, Routes} from "react-router-dom"

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
            {data.data.map((item) => <Route path={`/items/${item.id}`}><Item item={item} key={item.id}/></Route>)}
        </div>
    )
}

export default ItemList
