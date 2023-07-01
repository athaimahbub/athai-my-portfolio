import resume from '../../src/assets/Resume_Athai Mahbub Mim.pdf'
import { BsDownload } from 'react-icons/bs'
// import './Home.css'

const Home = () => {
    return (
        <div >
            <div className="hero min-h-screen" style={{ backgroundImage: `url(../../../assets/banner1.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-2 text-5xl font-bold text-cyan-400">A passionate</h1>
                        <h1 className=" text-3xl font-bold text-red-500">MERN stack Developer</h1>
                        <p className="mb-5 font-semibold">Transforming Ideas into Powerful Web Applications. Building Dynamic Web Experiences.Unlocking the Potential of Web Applications.</p>
                        <a className="btn bg-cyan-600 hover:bg-cyan-700 text-white" href={resume} download>DownLoad Resume <BsDownload></BsDownload></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;