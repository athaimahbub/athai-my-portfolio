import htmlPicture from '../assets/htmlImage.jpg'
import cssPicture from '../assets/cssPicture.png'
import jsPicture from '../assets/javaScript.png'
import bootPicture from '../assets/bootstrap.jpg'
import tailPicture from '../assets/tailwindCss.png'
import mongoPicture from '../assets/mongo1.jpg'
import nodePicture from '../assets/node.png'
import expressPicture from '../assets/express.jpg'

const Skill = () => {
    return (
        <div className='min-h-screen '>
            <h1 className="mb-2 mt-6 text-3xl text-center font-bold text-cyan-400">What I know</h1>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-16">
                <div className="mx-auto" >
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={htmlPicture} />
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="mx-auto" >
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={cssPicture} />
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="mx-auto">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={jsPicture} />
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className="mx-auto">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={bootPicture} />
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className="mx-auto">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={tailPicture} />
                        </div>
                    </div>
                </div>

                {/* 6 */}
                <div className="mx-auto">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={mongoPicture} />
                        </div>
                    </div>
                </div>

                {/* 7 */}
                <div className="mx-auto">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={nodePicture} />
                        </div>
                    </div>
                </div>

                {/* 8 */}
                <div className="mx-auto">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                            <img src={expressPicture} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;