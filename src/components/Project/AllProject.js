import { NavLink } from "react-router-dom";
import "./style.css";





const AllProject = ({tittle, img, index}) => {
    return ( 
        // NavLink для того чтобы по клику переходить по проектам (по их индексам)
        <NavLink to={`/indproject/${index}`}>
            <li className="project">
                    <img src={img} alt={tittle} className="project__img"/>
                    <h3 className="project__tittle">{tittle}</h3>
             </li>
        </NavLink>
        
     );
}
 
export default AllProject;
