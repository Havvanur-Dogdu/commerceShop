import React from 'react'
import {
    Dropdown
} from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Filter = () => {

    const { category } = useParams()
    return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' ,marginBottom:'10px' }}>
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Sıralama Ölçütü{' '}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item  href={category ? `/category/${category}/filter/fiyat-artan` : "/filter/fiyat-artan"}>Fiyata göre Artan</Dropdown.Item>
                <Dropdown.Item  href={category ? `/category/${category}/filter/fiyat-azalan` : "/filter/fiyat-azalan"}>Fiyata göre Azalan</Dropdown.Item>
                <Dropdown.Item  href={category ? `/category/${category}/filter/en-favoriler` : "/filter/en-favoriler"}>En Favoriler</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default Filter
