import project1 from '../assets/chefProject.png'
import project2 from '../assets/dollProject.png'
import project3 from '../assets/tranquilProject.png'
const Projects = () => {
    return (
        <div >
            <h1 className="mb-2 mt-6 text-3xl text-center font-bold text-cyan-400">Projects</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                        <figure><img src={project2} alt="Projects" className='w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Disney Doll Kingdom</h2>
                            <p> Designed this application with authentication functionality, requiring users to log in for
                                accessing and adding toys.</p>
                            <p>CRUD operations are implemented to manipulate data within the website and user
                                interactions.
                            </p>

                            <p> Firebase Authentication for secure user authentication and  social login systems are implemented in this project.</p>
                            <p>Technologies: Tailwind CSS, DaisyUI, AOS animation, React Router, MongoDb</p>
                            <div className="card-actions justify-end">
                                <div className="card-actions ">
                                    <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://doll-kingdom.web.app' target="_blank">Live Site</a>
                                    <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://github.com/athaimahbub/disney-doll-kingdom' target="_blank">Client Code</a>
                                    <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://github.com/athaimahbub/disney-doll-kingdom-server-side' target="_blank">Server Code</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <figure><img src={project3} alt="Projects" className='w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tranquil Haven</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="card-actions ">
                                    <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://tranquil-haven-7a015.web.app/' target="_blank">Live Site</a>
                                    <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://github.com/athaimahbub/tranquil-haven-client-side' target="_blank">Client Code</a>
                                    <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://github.com/athaimahbub/tranquil-haven-server-side' target="_blank">Server Code</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <figure><img src={project1} alt="Projects" className='w-full h-48' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bangalee Chef's Den</h2>
                            <p> Designed this application with authentication functionality, requiring users to log in for
                                accessing and adding toys.</p>
                            <p>CRUD operations are implemented to manipulate data within the website and user
                                interactions.
                            </p>

                            <p> Firebase Authentication for secure user authentication and  social login systems are implemented in this project.</p>
                            <p>Technologies: Tailwind CSS, DaisyUI, AOS animation, React Router, MongoDb</p>
                            <div className="card-actions ">
                                <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://fabulous-beignet-d2e796.netlify.app/' target="_blank">Live Site</a>
                                <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://github.com/athaimahbub/chef-den-client-side' target="_blank">Client Code</a>
                                <a className="px-2 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white" href='https://github.com/athaimahbub/chef-den-server-side' target="_blank">Server Code</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;