import React from "react";
import Exps from '../exps';
import useFetch from "../../useFetch";

const ListExperiences = () => {
  const { data,isPending,error } = useFetch("http://localhost:5000/api/experience/experiences");

 
  
  return ( 
    <div className="experiences">
          {error && <div>{error}</div>}
          {isPending && <div>loading...</div>}
          {data && <Exps data={data}/>}
          {data && console.log(data)}
        </div>
  );
};
export default ListExperiences;
