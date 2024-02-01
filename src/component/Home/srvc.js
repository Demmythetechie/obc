import {srvc_details} from "../../states.js";
import { useState } from "react";

function Srvc () {
    const [details, setDetails] = useState(srvc_details);

    return (
        <div style={{backgroundImage: "url('/images/bg-2.png')"}} className="bg-white flex flex-col justify-center items-center w-full bg-[length:1200px_800px] bg-no-repeat bg-[top_145px_right_-390px] gap-y-[60px] pt-[40px]">
            <div className="flex flex-col items-center gap-y-[5px]">
                <h1 className="text-[18px] font-[Neue-bold] text-[#0d202b]">Our Services</h1>
                <p className="text-center text-[18px] font-[Neue-regular]">We deploy utmost expertise and care in all our assignments to help our client <br/>achieve
their goal and remain relevant in the industry.
                </p>
            </div>
            <div className="flex flex-row flex-wrap justify-between gap-y-[40px] w-[1100px]">
                {details.map((detail) =>(
                    <div className="flex flex-col h-[280px] w-[340px] gap-y-[10px] bg-[#0d202b] p-[20px_25px_20px_25px] rounded-[7px]">
                        <div className="flex w-[70px] h-[80px]">
                            <img className={detail.img_style} src={detail.img} alt=""/>
                        </div>
                        <h1 className={detail.head}>{detail.name}</h1>
                        <p className={detail.para}>{detail.intro}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Srvc;