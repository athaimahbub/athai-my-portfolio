import picture from '../assets/Real_Athai_Pic_White (2).jpg'
const About = () => {
    return (
        <div className='min-h-screen'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />   
                    <div>
                        <h1 className="text-5xl font-bold px-12">Hello!</h1>
                        <h1 className="text-3xl font-bold px-12"> I'm <span className='text-cyan-500'>Athai Mahbub Mim</span>!</h1>
                        <p className="py-2 px-12 font-semibold">A passionate junior frontend web developer with a strong enthusiasm for creating beautiful and user-friendly websites. I have a solid foundation in HTML, CSS, and JavaScript, and I'm constantly expanding my knowledge to stay up-to-date with the latest web development trends and technologies.I have completed my graduation in Computer Science & Engineering.</p>
                        
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default About;