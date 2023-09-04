import React from 'react'
import {
    Button,
    ButtonGroup,
    Dropdown,
    Row,
} from 'react-bootstrap'

const HeaderMenu = () => {

    return (
        <Row xs="6" className="justify-content-md-center" style={{marginTop: '20px'}}>
            <Button href="/" type="button" className="btn btn-primary" style={{marginRight: '3px'}}>TÜM ÜRÜNLER</Button>
            <Dropdown style={{marginRight: '3px'}} as={ButtonGroup} id="bg-nested-dropdown">
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            ÇOCUK
            </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/category/Cocuk">Tüm Ürünler</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/child-ust-giyim">Üst Giyim</Dropdown.Item>
                    <Dropdown.Item href="/child-alt-giyim">Alt Giyim</Dropdown.Item>
                    <Dropdown.Item href="/child-dis-giyim">Dış Giyim</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{marginRight: '3px'}} as={ButtonGroup} id="bg-nested-dropdown">
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            KADIN
            </Dropdown.Toggle>
                <Dropdown.Menu>
                
                    <Dropdown.Item href="/category/woman">Tüm Ürünler</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/woman-ust-giyim">Üst Giyim</Dropdown.Item>
                    <Dropdown.Item href="/woman-alt-giyim">Alt Giyim</Dropdown.Item>
                    <Dropdown.Item href="/woman-dis-giyim">Dış Giyim</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/woman-aksesuar">Çanta ve Aksesuar</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown style={{marginRight: '3px'}} as={ButtonGroup} id="bg-nested-dropdown">
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            ERKEK
            </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/category/man">Tüm Ürünler</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/man-ust-giyim">Üst Giyim</Dropdown.Item>
                    <Dropdown.Item href="/man-alt-giyim">Alt Giyim</Dropdown.Item>
                    <Dropdown.Item href="/man-dis-giyim">Dış Giyim</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/man-ceket-kaban">Ceket & Kaban</Dropdown.Item>
                    <Dropdown.Item href="/man-hırka-kazak">Hırka & Kazak</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Button href="/category/Outlet" type="button" class="btn btn-primary" style={{marginRight: '3px'}} >OUTLET</Button>
        </Row>
    )
}

export default HeaderMenu 
