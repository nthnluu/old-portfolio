export default function ExperienceSection({experiences}) {
    return <div className="flow-root">
        <ul className="-mb-8">

            {experiences.map((experience, index) => <li key={index}>
                <div className="relative pb-8">
                    {index !== (experiences.length - 1) && <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>}

                    <div className="relative flex items-start space-x-3">
                        <div className="relative">
                            <img
                                className="h-12 w-12 rounded-full bg-gray-100 border shadow flex items-center justify-center ring-8 ring-white"
                                src={experience.image}
                                alt=""/>
                        </div>
                        <div className="min-w-0 flex-1">
                            <div>
                                <div className="text-lg">
                                    <h3 className="font-semibold text-gray-800">{experience.title}</h3>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">{experience.company}</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">
                                    {experience.start} - {experience.end}
                                </p>
                            </div>
                            <div className="mt-2 text-sm text-gray-700">
                                <p>
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>)}
        </ul>
    </div>
}