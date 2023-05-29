import React from 'react'
import Searchresult from '../src/component/Searchresult'

const SearchResult = (props) => {
  return (
    <>
      <Searchresult contractorsList={props.apiResponse}/>
    </>
  )
}

export async function getServerSideProps ({query}) {
  let API_BASE_URL;
  if(query.query){
    API_BASE_URL = `${process.env.BASE_URL}/gateway/review-website/customer/search?searchText=${query.query}&pageNumber=${query.pageNumber?query.pageNumber:0}&pageSize=${query.pageSize?query.pageSize:10}`;
  }else{
    API_BASE_URL = `${process.env.BASE_URL}/gateway/review-website/customer/search?pageNumber=${query.pageNumber?query.pageNumber:0}&pageSize=${query.pageSize?query.pageSize:10}`;
  }
  let data = '';
  await fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((json) => {
      data = json.payload;
    });
  return {
    props: {
      apiResponse: data
    },
  };
}

export default SearchResult
