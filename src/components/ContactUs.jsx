import { Mail, MapPin, Phone } from "lucide-react";

const glowBase =
    "relative flex items-center justify-center transition duration-300";

const ContactUs = () => {
    return (
        <div className="bg-cyan-300/20 text-white p-8 relative z-500 mt-12 rounded-4xl mr-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Contact Info — left on large, bottom on small */}
                <div className="space-y-6">
                    <h1 className="text-7xl font-bold">Let's Connect</h1>
                    <p className="text-lg text-gray-400">for the best collabration experience.</p>
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <a href="tel:+919673929867"
                                className="text-xl tracking-wider font-light flex items-center justify-center gap-3"
                            >
                                <span
                                    className={`${glowBase} hover:before:opacity-100 before:opacity-0 before:absolute before:w-10 before:h-10 before:rounded-full before:-z-10 before:blur-xl before:bg-gradient-to-r before:from-[#00ff00] before:to-[#66ff66]`}
                                >
                                    <Phone size={28} />
                                </span>
                                +91- 9673929867 </a>
                        </div>
                        <div className="flex items-center">
                            <a href="mailto:bgadkane@gmail.com"
                                className="text-xl tracking-wider flex items-center justify-center gap-3"
                            >
                                <span
                                    className={`${glowBase} hover:before:opacity-100 before:opacity-0 before:absolute before:w-10 before:h-10 before:rounded-full before:-z-10 before:blur-xl before:bg-gradient-to-r before:from-[#ff9900] before:to-[#ffcc00]`}
                                >
                                    <Mail size={28} />
                                </span>
                                bgadkane@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="https://maps.app.goo.gl/A9oFH77Zct1vC4xo8"
                                target="_blank"
                                className="text-xl tracking-wider flex items-center justify-center gap-3"
                            >
                                <span
                                    className={`${glowBase} hover:before:opacity-100 before:opacity-0 before:absolute before:w-10 before:h-10 before:rounded-full before:-z-10 before:blur-xl before:bg-gradient-to-r before:from-[#ff0000] before:to-[#cc0000]`}
                                >
                                    <MapPin size={28} />
                                </span>
                                Ambegaon Khurd, Pune, Maharashtra 411046
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form — right on large, top on small */}
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 text-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 text-lg"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-3 text-lg"
                    ></textarea>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition duration-400"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;