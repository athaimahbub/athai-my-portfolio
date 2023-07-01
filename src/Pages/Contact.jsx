

const Contact = () => {
    return (
        <div >

            <div className="hero min-h-screen bg-base-100">

                <div className="mx-8 hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center text-white lg:text-left">
                        <h1 className="text-5xl font-bold">Contact now!</h1>
                        <p className="px-2">Thank you for visiting my portfolio! I would love to hear from you. Whether you have a question, want to collaborate on a project, or just want to say hello, feel free to reach out using this contact form. Your message is important to me, and I will do my best to respond promptly. </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-8">

                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="message" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gray-700 hover:bg-gray-800 text-white">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;