import { BsPatchCheckFill } from "react-icons/bs";

const Exps = (props) => {
    const data = props.data;
    return ( 
        <div className="exps">
            {
                data.map((d)=>(
                    <div key={d._id} className="experience__backend">
                         <h3>{d.title}</h3>
                        <h4 className="experience_description">{d.description}</h4>
                    <div className="experience__content">
                    {d.skills.map((s) => {
                    return (
                        <article key={s._id} className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div className="title__level">
                                <h4>{s.name}</h4>
                                <small className="text-light">{s.level}</small>
                            </div>
                        </article>
            );
          })}
        </div>
      </div>
                ))
            }
        </div>
     );
}
 
export default Exps;