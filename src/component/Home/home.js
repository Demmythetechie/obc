import Intro from './intro.js';
import Srvc from './srvc.js';
import Team from './team.js';
import Abt from './abt.js';
import Customer from './customer.js';

function Home() {
    return (
        <div className='flex flex-col'>
            <Intro/>
            <div style={{backgroundImage: "url('/images/bg-2.png')"}} className="bg-white items-center w-full bg-[length:1200px_800px] bg-no-repeat bg-[top_220px_right_-390px] gap-y-[60px] pt-[75px]">
                <Srvc/>
                <Abt/>
                <Team/>
            </div>
            <Customer/>
        </div>
    );
}

export default Home;