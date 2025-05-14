import { WORK_DATA } from '../constants'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const AnimatedCounter = () => {

    const { ref, inView } = useInView({
        // triggerOnce: true,  
        threshold: 0.3,
    });

    return (
        <div id='work' ref={ref}
            className='padding-x-lg xl:mt-0 mt-32'
        >
            <div className="grid-4-cols mx-auto">
                {
                    WORK_DATA.map((item, index) => (
                        <div key={index} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                            <div className='text-white text-5xl font-bold mb-2' >
                                {inView ? (
                                    <CountUp suffix={item.suffix} duration={2} end={parseFloat(item.value)} />
                                ) : (
                                    "0"
                                )}
                                <div className="text-white-50 text-lg">{item.label}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AnimatedCounter