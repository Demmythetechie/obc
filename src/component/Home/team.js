import { about_team } from "../../states";
import { useState } from "react";

function Team () {
    const intro = `Our Management team comprises seasoned professionals
    who have proven themselves in the business world. They are
    highly accomplished professionals with passion for excellence
    and high level of integrity`;

    const [active, setActive] = useState({index: null, unq: null});
    

    function onHover(index, unq) {
        setActive({index, unq});
    }

    function onOut(index) {
        setActive({index: null, unq: null});
    }

    return (
        <div className="flex flex-col items-center pt-[75px] pb-[75px] gap-y-[60px]">
            <div className="w-[700px] flex flex-col items-center gap-y-[5px]">
                <h1 className="font-[Neue-bold] text-[18px] text-[#0d202b]">Our Leadership Team</h1>
                <p className="text-center text-[18px] font-[Neue-regular]">{intro}</p>
            </div>
            <div className="w-[1100px] h-[201px]">
                {about_team.map((abt, index) =>(
                    <div style={{left: active.index === index ? abt.mv : active.unq === abt.idx ? abt.mv2 : ''}} onMouseOver={() => onHover(index, abt.unq)} onMouseOut={onOut} className={abt.cls}>
                        <div style={{backgroundImage: `url(${abt.pic})`}} className="col-[1_/_span_1] row-[1_/_span_4] w-[100px] h-[100px] bg-[length:100px_100px] bg-no-repeat rounded-[50%]"></div>
                        <h1 className="col-[3_/_span_1] row-[2_/_span_1] font-[Neue-bold] text-[#d6d5d7]">{abt.name}<span className="text-[#0eb9a0]">{abt.qua}</span></h1>
                        <div className="col-[1_/_span_3] row-[4_/_span_2] overflow-hidden pr-[10px]">
                            <div style={{shapeOutside: 'polygon(0 0, 100% 0, 100% 18%, 0 36%)'}} className="float-left h-[95px] w-[120px]"></div>
                            <p className="text-justify text-[15px] text-white">{abt.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;