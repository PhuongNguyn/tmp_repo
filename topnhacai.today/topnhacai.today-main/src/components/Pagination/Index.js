import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'

function Pagination(props) {
    var {data} = props;
    const [isLoading, setLoading] = useState(false); //State for the loading indicator
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

        /*
            Posts fetching happens after page navigation, 
            so we need to switch Loading state on Router events.
        */
    useEffect(() => { //After the component is mounted set router event handlers
        Router.events.on('routeChangeStart', startLoading); 
        Router.events.on('routeChangeComplete', stopLoading);

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
    }, [])

        //When new page selected in paggination, we take current path and query parrams.
        // Then add or modify page parram and then navigate to the new route.
    const pagginationHandler = (page) => {
        // const currentPath = props.router.pathname;
        // const currentQuery = props.router.query;
        // currentQuery.page = page.selected + 1;

        // props.router.push({
        //     pathname: currentPath,
        //     query: currentQuery,
        // });
        const currentPath = Router.pathname;
        const currentQuery = Router.query;
        currentQuery.skip = page.selected + 1;

        // Router.push({
        //     pathname: currentPath,
        //     query: currentQuery,
        // });
    };

    return (
        <div className="container">
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}

                initialPage={data.currentPage - 1}
                pageCount={data.totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
            />
        </div>
    );
}



export default Pagination;
