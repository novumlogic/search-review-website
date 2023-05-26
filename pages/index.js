import Home from '../src/component/Home'

const index = (props) => {
  return (
    <Home contractorsList={props.apiResponse}/>
  )
}
export async function getServerSideProps ({query}) {
  const API_BASE_URL = `https://api.projecthero.in/gateway/review-website/customer/search?pageNumber=${query.pageNumber?query.pageNumber:0}&pageSize=${query.pageSize?query.pageSize:3}`;

  let data = '';
  await fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((json) => {
      data = json.payload.customers;
    });
  return {
    props: {
      apiResponse: data
    },
  };
}

export default index
