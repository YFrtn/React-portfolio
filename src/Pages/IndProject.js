import { useParams } from 'react-router-dom';
import {projects} from './../helpers/projectList';
import BtnGitHub from '../components/ButtonGitHub/BtnGitHub';


const IndProject = () => {
    // Чтобы 
    const {id} = useParams();
    const project = projects[id];

    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="tittle-1">{project.tittle}</h1>
                    <img src={project.imgBig} alt={project.tittle} className="project-details__cover"/>
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {/* 2 час 03 минута. Если gitHubLink присутствует, то кнопка рендерется, то есть если условие до and выполняется то кнопка рендерется. */}
                    {project.gitHubLink && (
                        <BtnGitHub link="https://github.com/YFrtn"/>
                    )}
                </div>
            </div>
        </main>
     );
}
 
export default IndProject;
