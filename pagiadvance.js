
import ReactPaginate from 'react-paginate';

// command = npm install react-paginate --save 
    
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;



  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(allPost.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allPost.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,allPost]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allPost.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



   <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageClassName='page-num'
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        
      />