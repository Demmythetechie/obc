import { Link } from "react-router-dom";
import {useState} from "react";

function Abt () {
    const summary = `Ola Baruwa & Co (Chartered Accountants) is wholly owned and managed by indigenous
    partner and management staff. Prior to the registration of Ola Baruwa & Co , the partner
    and the Management staff have been engaged in accounting, taxation, business support
    and advisory services across different sectors of the economy for over a decade.`;

    const [more, setMore] = useState(true);

    function over(bnry) {
        setMore(bnry);
    }

    function out() {
        setMore(true);
    }

    return(
        <div className="w-full h-[700px] flex flex-row justify-center items-start pt-[100px] pb-[100px] gap-x-[130px]">
            <div className="relative h-[600px] w-[580px]">
                <div style={{backgroundImage: "url('/images/abt_img2.jpg')"}} className="absolute z-10 top-[40px] w-[400px] h-[500px] bg-no-repeat bg-cover bg-[center_top] rounded-[10px_10px_10px_10px]"></div>
                <div style={{backgroundImage: "url('/images/abt_img.jpg')"}} className="absolute left-[178px] z-0 w-[400px] h-[500px] bg-no-repeat bg-cover bg-[center_top] rounded-[7px_100px_30px_7px]"></div>
            </div>
            <div className="w-[500px] flex flex-col justify-start gap-y-[40px]">
                <h1 className="text-[50px] capitalize text-[#0d202b] font-[Neue-bold] leading-[60px]">What make us different</h1>
                <p className="text-[17px] text-black font-[Neue-regular]">{summary}</p>
                <Link onMouseOver={()=> over(false)} onMouseOut={out} className="flex flex-row gap-x-[10px] items-end font-[neue-bold] text-[17px] text-[#0d202b] hover:text-[#9a9a9c]" to=''>Learn more <img className="w-[20px] h-[20px]" src={more ? '/images/R-arrow.png' : '/images/Rw-ash.png'} alt=""/></Link>
            </div>
        </div>
    );
}

export default Abt;