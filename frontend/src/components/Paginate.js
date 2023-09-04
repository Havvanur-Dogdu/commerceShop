import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin = false, keyword = '', category = '', filter = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? category
                    ? filter
                    ? `/search/${keyword}/page/${x + 1}/category/${category}/filter/${filter}`
                    : `/search/${keyword}/page/${x + 1}/category/${category}`
                  : filter
                    ? `/search/${keyword}/page/${x + 1}/filter/${filter}`
                    : `/search/${keyword}/page/${x + 1}`

                //keyword yok    
                : category
                  ? filter
                    ? `/page/${x + 1}/category/${category}/filter/${filter}`
                    : `/page/${x + 1}/category/${category}`

                  //kategori yok
                  : filter
                    ? `/page/${x + 1}/filter/${filter}`
                    : `/page/${x + 1}`
                

              : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
