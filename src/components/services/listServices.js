import React from 'react';
import useFetch from '../../useFetch';
import List from '../List';

const ListServices = () => {

  const { data,isPending,error } = useFetch("https://enow-backend.onrender.com/api/service/services");
    
    return (

         
        
        <div className="services">
          {error && <div>{error}</div>}
          {isPending && <div>loading...</div>}
          {data && <List data={data}/>}
          {data && console.log(data)}
        </div>
          
    
    );
}

export default ListServices;
