import {BiCheck} from 'react-icons/bi';

const List = (props) => {

    const data  = props.data;
    return ( 
       <div className="list">
             {
                data.map((d)=>(
                    <article className='service' key={d._id}>
                        <div className="service__head">
                            <h3>{d.title}</h3>
                        </div>
                        <ul className='service__list'>
                            <li>
                                <BiCheck className='service__list__icon'/> 
                                <p> {d.description} </p>
                             </li>
                        </ul>
                    </article>
                ))
             }
       </div>
     );
}
 
export default List;