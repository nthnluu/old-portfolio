import React from "react";

export default function ({title, desc, img, link}){
    return <div className="flex flex-col rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:opacity-75 focus:opacity-50">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover"
                 src={img}
                 alt=""/>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
                <a href={link} className="block hover:opacity-75 focus:opacity-50">
                    <h3 className="text-xl leading-7 font-semibold text-gray-900">
                        {title}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        {desc}
                    </p>
                </a>
            </div>
        </div>
    </div>
}
