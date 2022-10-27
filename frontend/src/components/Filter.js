import React from 'react'
import {
    Button,
    ButtonGroup,
    Dropdown,
    Row,
    DropdownButton,
} from 'react-bootstrap'

const Filter = () => {
    return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' ,marginBottom:'10px' }}>
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Sıralama Ölçütü{' '}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="fiyat-artan">Fiyata göre Artan</Dropdown.Item>
                <Dropdown.Item href="fiyat-azalan">Fiyata göre Azalan</Dropdown.Item>
                <Dropdown.Item href="en-favoriler">En Favoriler</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default Filter
