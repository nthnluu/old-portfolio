export default function HeroBanner(props) {
    return <div className="hero-backdrop leading-relaxed text-gray-800 py-16 px-6 lg:px-0">
        <div className="w-full mb-8 md:mb-0">
            <div className="md:float-right mb-4">
                <div>
                    <button className="mini-button mr-4" onClick={() => {
                        location.href = 'https://github.com/nthnluu';
                    }}>
                        <i className="fab fa-github text-xl mt-1"/>
                    </button>
                    <button className="mini-button mr-4" onClick={() => {
                        location.href = 'https://twitter.com/nthnluu';
                    }}>
                        <i className="fab fa-twitter text-xl mt-1"/>
                    </button>
                    <button className="mini-button mr-4" onClick={() => {
                        location.href = 'https://www.linkedin.com/in/nathan-luu-18a51b68/';
                    }}>
                        <i className="fab fa-linkedin-in text-xl mt-1"/>
                    </button>
                </div>
            </div>
        </div>
        <h1 className="text-xl">{props.h1}</h1>
        <div className="text-5xl font-bold leading-snug">
            <h2 className="">{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
        <p className="max-w-lg mt-5 text-lg text-gray-700">{props.paragraph}</p>
    </div>
}

export function Skill(props) {
    return (<div className="text-center">
        <img alt="" className="w-32 h-32 mx-auto" style={{borderRadius: '36px'}} src={props.img}/>
        <h4 className="font-medium text-xl text-gray-800 mt-4 mt-8">{props.title}</h4>
    </div>);

}
