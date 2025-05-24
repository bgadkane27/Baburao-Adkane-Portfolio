import { motion } from "framer-motion";


const testimonials = [
    {
        message:
            "Nalaprasad did an amazing job with our logo. The logo concepts delivered by him were outstanding. All the elements of the logo were backed by a unique sense of creativity as well as market alignment.",
        name: "Smit Zaveri",
        designation: "Founder, Suprwell",
        image: "https://via.placeholder.com/50",
    },
    {
        message:
            "You're more than a logo designer. You understood my brand immediately and evolved it. I got a color palette as well as different concepts to choose from.",
        name: "Jacob Slunga",
        designation: "Founder, Znook",
        image: "https://via.placeholder.com/50",
    },
    {
        message:
            "Nalaprasad is a young and promising designer. He is quick to grasp requirements and respond with great ideas. Very happy with the output for our brand.",
        name: "Ashok Kumar J",
        designation: "Co-Founder, Accelerate analytics",
        image: "https://via.placeholder.com/50",
    },
    {
        message:
            "The quality of presentation and translating it onto reality is outstanding. I would recommend his designs to anyone.",
        name: "Surya K",
        designation: "Co-Founder, SomeTech",
        image: "https://via.placeholder.com/50",
    },
    {
        message:
            "Nalaprasad did an amazing job with our logo. The logo concepts delivered by him were outstanding. All the elements of the logo were backed by a unique sense of creativity as well as market alignment.",
        name: "Smit Zaveri",
        designation: "Founder, Suprwell",
        image: "https://via.placeholder.com/50",
    },
    {
        message:
            "You're more than a logo designer. You understood my brand immediately and evolved it. I got a color palette as well as different concepts to choose from.",
        name: "Jacob Slunga",
        designation: "Founder, Znook",
        image: "https://via.placeholder.com/50",
    },
    {
        message:
            "Nalaprasad is a young and promising designer. He is quick to grasp requirements and respond with great ideas. Very happy with the output for our brand.",
        name: "Ashok Kumar J",
        designation: "Co-Founder, Accelerate analytics",
        image: "https://via.placeholder.com/50",
    },
    {
        message:
            "The quality of presentation and translating it onto reality is outstanding. I would recommend his designs to anyone.",
        name: "Surya K",
        designation: "Co-Founder, SomeTech",
        image: "https://via.placeholder.com/50",
    },
];

const Testimonial = () => {
    return (
        <div className="bg-cyan-300/30 text-white py-16 overflow-hidden relative z-500 rounded-4xl mt-12">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
                    Satisfaction isn’t <span className="text-gray-400">one-sided</span>. It’s built on trust, collaboration, and outcomes that matter for all.
                </h2>
            </div>

            <div className="relative">
                {/* Left & right fade gradients */}
                <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-cyan-300/30 to-transparent z-10 rounded-tr-xl"></div>
                <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-cyan-300/30 to-transparent z-10 rounded-tl-xl"></div>

                {/* Scrolling testimonial cards */}
                <motion.div
                    className="flex space-x-6 relative"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 rounded-xl p-6 flex flex-col justify-between space-y-6 min-w-[320px] max-w-[350px] shrink-0"
                        >
                            <p className="text-gray-300 leading-relaxed">{item.message}</p>
                            <div className="flex items-center space-x-4 pt-4 border-t border-neutral-700">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p className="text-sm text-gray-400">{item.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonial;
