import { Link } from "react-router-dom";

function Intro () {
    return (
        <div className="flex flex-row h-[580px] items-center justify-between w-full pt-[7%] p-[7%]">
            <div className="flex flex-col justify-center h-[500px] w-[600px] gap-y-[30px]">
                <img className='w-[83px] h-[48px]' src="/images/obc-icon.png" alt=""/>
                <p className=" leading-[75px] tracking-[2px] text-[75px] text-[#0d202b] font-bold font-[bebas]">Accounting, Tax <br/>& Audit services</p>
                <p className="text-[19px] text-black font-[Neue-light]">Our services enhance trust and transparency premised<br/>on integrity and independence.</p>
                <div className="flex flex-row items-center gap-x-[20px]">
                    <Link className=" capitalize font-[Neue-regular] flex justify-center items-center rounded-[4px] bg-[#191970] text-white w-[140px] h-[35px]">Get in touch</Link>
                    <Link className="font-[Neue-regular] flex gap-x-[10px] justify-center items-center rounded-[4px] border border-[#191970] border-dashed text-[#191970] w-[140px] h-[35px]">About us
                        <img className="w-[12px] h-[12px]" src="/images/diagonal-arrow.png" alt=""/>
                    </Link>
                </div>
            </div>
            <div className="flex justify- items-center w-[700px] h-[600px]">
                
            </div>
        </div>
    );
}

export default Intro;