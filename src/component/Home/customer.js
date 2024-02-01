import {review, store, anime} from '../../states.js';
import { useState, useEffect, useReducer } from 'react';

function Customer (){
    const intro = `We have a clear understanding of our business environment and our client's needs. Not
    only are we versatile in our local regulation, we also understand the international
    regulatory framework which helps us position our cl  ient and enables us to expand as an
    emerging financial service firm`;

    const [bgn, setBgn] = useState(null);
    const [end, setEnd] = useState(null);
    const [nxt, setNxt] = useState(null);
    const [animes, SetAnime] = useState(anime);
    const [ratings, dispatch] = useReducer(reducer, [review, store]);


    function reducer(state, action) {
        let arr = null;
        if (action.type === 0) {
            arr = state[0].shift();
            state[1].push(arr);
            state[0].push(state[1].shift());
        } else if (action.type === 1) {

        }
        return state;
    }

    useEffect(()=>{
        if (bgn === null && end === null) {
            setTimeout(()=>{
                setBgn(0);
                setEnd(null);
            }, 5500)
        } else if (bgn === 0 && end === null) {
            if (nxt === 0) {
                dispatch({type: 0});
                setBgn(null);
                setEnd(3);
                setNxt(null);
                SetAnime(["animate-[reduce] delay-5s duration-500 direction-normal fill-mode-forwards repeat-1 ease-in flex flex-col justify-between w-[450px] h-[250px] border border-[#0d202b]", anime[1]]);
            } else {
                setTimeout(()=>{
                    dispatch({ type: 0 });
                    setBgn(null);
                    setEnd(3);
                }, 5490);
            }
        } else if (bgn === null && end === 3 ) {
            setTimeout(()=>{
                setEnd(null);
                setBgn(0);
            }, 5500);
        }
    }, [bgn, end, nxt]);

    function next() {
        setBgn(0);
        setEnd(null);
        setNxt(0);
        SetAnime(["animate-[reduce] delay-100 duration-500 direction-normal fill-mode-forwards repeat-1 ease-in flex flex-col justify-between w-[450px] h-[250px] border border-[#0d202b]", anime[1]]);
        console.log("next");
    }

    return ( 
        <div className="flex flex-col items-center gap-x-[20px] border w-full pt-[75px] pb-[75px] gap-y-[40px]">
            <div className="flex flex-col items-center gap-y-[10px] w-[800px]">
                <h1 className="text-[#0d202b] text-[17px] font-[Neue-bold]">Our Customers Feedback</h1>
                <p className="text-center text-[18px] font-[Neue-regular]">{intro}</p>
            </div>
            <div className="flex flex-row justify-center items-center w-[952px] overflow-hidden gap-x-[50px]">
                {ratings[0].map((rating, index) => (
                    <div className={bgn === index ? animes[0] : end === index ? animes[1] : 'flex flex-col justify-between w-[450px] h-[250px] border border-[#0d202b]'}>
                        <div className={'flex flex-col justify-between h-[230px] w-[450px] p-[20px_35px_20px_35px]'}>
                            <h1 className={bgn === index ? "hidden font-[Neue-bold] text-[17px] text-[#0d202b]" : end === index ? "hidden font-[Neue-bold] text-[17px] text-[#0d202b]" : 'font-[Neue-bold] text-[17px] text-[#0d202b]'}>{rating.repName}</h1>
                            <p className={bgn === index ? "hidden font-[Neue-regular] text-[15px]" : end === index ? "hidden font-[Neue-regular] text-[15px]" : "font-[Neue-regular] text-[15px]"}>{rating.msg}</p>
                            <p className={bgn === index ? "hidden font-[Neue-regular] text-[16px] text-[#191970]" : end === index ? "hidden font-[Neue-regular] text-[16px] text-[#191970]" : "font-[Neue-regular] text-[16px] text-[#191970]"}>{rating.company}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-end w-[1000px] gap-x-[370px] pr-[10px]">
                <div className="flex flex-row gap-x-[20px]">
                    <svg className="stroke-black hover:stroke-[#191970] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="15" height="15">
                        <path fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" d="M1 7h16M11 1l6 6-6 6" class="colorStroke000 svgStroke"></path>
                    </svg>
                    <svg onClick={next} className="stroke-black hover:stroke-[#191970]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="15" height="15">
                        <path fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" d="M1 7h16M11 1l6 6-6 6" class="colorStroke000 svgStroke"></path>
                    </svg>
                </div>
                <div className="flex flex-row gap-x-[10px] w-[100px]">
                    <div className="bg-[#d6d5d7] w-[8px] h-[8px] rounded-[50%] hover:w-[10px] hover:h-[10px] hover:bg-[#0d202b]"></div>
                    <div className="bg-[#d6d5d7] w-[8px] h-[8px] rounded-[50%] hover:w-[10px] hover:h-[10px] hover:bg-[#0d202b]"></div>
                    <div className="bg-[#d6d5d7] w-[8px] h-[8px] rounded-[50%] hover:w-[10px] hover:h-[10px] hover:bg-[#0d202b]"></div>
                    <div className="bg-[#d6d5d7] w-[8px] h-[8px] rounded-[50%] hover:w-[10px] hover:h-[10px] hover:bg-[#0d202b]"></div>
                    <div className="bg-[#d6d5d7] w-[8px] h-[8px] rounded-[50%] hover:w-[10px] hover:h-[10px] hover:bg-[#0d202b]"></div>
                </div>
            </div>
        </div>
    );
}

export default Customer;