import React from "react";

export default function ComponentLibrary(){
    return <section className={"bg-blue-950 h-[95vh] flex flex-col py-10"}>
        <div className={" container flex flex-col h-full"}>
            <div className={""}>
                <h1 className={"text-5xl fancy-font text-white"}>Component Library</h1>
            </div>

            <div className={"flex-1 flex gap-1"}>
                <div className={"h-full w-10 bg-gray-50 opacity-5 h-full"}>
                    <p style={{writingMode: "vertical-rl"}}>{"<<< Previous Component >>>"}</p>
                </div>

                <div className={"flex-1 bg-red-400 h-full flex"}>
                    <div className={"flex-1 h-full"}>

                    </div>
                    <div className={"flex-1 h-full "}>

                    </div>
                </div>

                <div className={"h-full w-10 bg-yellow-50 h-full"}>

                </div>
            </div>
        </div>
    </section>
}