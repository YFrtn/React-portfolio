// Проекты которые отображаются на главной станицы Projects, все проекты на одной страницы. 
import AllProject from '../components/Project/AllProject';
import {projects} from '../helpers/projectList';
// создали массив projects в папке helpers -> projectList и импортировали его сюда в Project.js


const Projects = () => {
    return ( 
        <>
            <main className="section">
                <div className="container">
                    <h2 className="tittle-1">Projects</h2>
                    <ul className="projects">
                        {/* обходим массив методом map который принимает в себя стрелочную функцию дальше пишем return и возращаем в наш AllProject описанные в массиве параметры */}
                        {projects.map((project, index) => {
                            return (
                                <AllProject 
                                key={index} 
                                tittle={project.tittle} 
                                img={project.img} 
                                // передали индекс в index чтобы по клику переключаться на индивидуальный проект и подключили егов NavLink (он в AllProject)
                                index={index}/>
                                
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
     );
}
 
export default Projects;
