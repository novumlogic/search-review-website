import React from 'react';
import Constractorprofile from '../src/component/Contractorprofile';

const ContractorProfile = (props) => {
  return (
    <>
      <Constractorprofile contractorDetails={props.details} reviews={props.reviews} />
    </>
  );
};

export async function getServerSideProps ({ query }) {
  const id = query.id;
  const pageNumber = query.pageNumber ? query.pageNumber : 0;
  const pageSize = query.pageSize ? query.pageSize : 3;

  const API_BASE_URL = `${process.env.BASE_URL}/gateway/review-website/customer/${id}/details`;

  const REVIEW_API_URL = `${process.env.BASE_URL}/gateway/review-website/customer/${id}/reviews?pageNumber=${pageNumber}&pageSize=${pageSize}`;

  let data = '';
  let reviewData = '';
  await fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((json) => {
      data = json.payload;
    });
  await fetch(REVIEW_API_URL)
    .then((res) => res.json())
    .then((json) => {
      reviewData = json.payload;
    });
    reviewData = {...reviewData, reviews: reviewData.reviews.filter(elm => [...new Set(reviewData.reviews.map(elm => elm.ratingId))].includes(elm.ratingId)).slice(0, pageSize)}
  
  return {
    props: {
      details: data,
      reviews: reviewData
    }
  };
}

export default ContractorProfile;
