import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactSearchBox from "react-search-box";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import './SearchPage.css'
import { BsSearch } from "react-icons/bs";
const SearchPage = () => {
  return(

   <div>
       <Navbarr/>
       <Container>
       <div className="SearchPage-main">
   <div className="SearchPage">Search Here</div>
   <div className='Searchbar'>
   <ReactSearchBox
      placeholder="Search Titles or Blogs"
      data={[
        {
          key: "john",
          value: "John Doe"
        },
        {
          key: "jane",
          value: "Jane Doe"
        },
        {
          key: "mary",
          value: "Mary Phillips"
        },
        {
          key: "robert",
          value: "Robert"
        },
        {
          key: "karius",
          value: "Karius"
        }
      ]}
    
      onFocus={() => {
        console.log("This function is called when is focussed");
      }}
      onChange={(value) => console.log(value)}
      autoFocus
      leftIcon={<><BsSearch/></>}
      iconBoxSize="48px"
    />
</div>


       </div>
       </Container>
<Footer/>
  </div>
  )
};

export default SearchPage;
