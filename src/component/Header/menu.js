import {Link} from 'react-router-dom';


function Menus () {
    const menus = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Services', path: '/services'},
        {name: 'Contact', path: '/contact'}
    ];

    return (
        <nav className='col-[3_/_span_1] flex flex-row gap-x-[15px] justify-between items-center'>
            {menus.map((menu) => (
                <Link className='font-[bebas] font-medium text-[19px] text-[#191970]' href={menu.path}>{menu.name}</Link>
            ))}
        </nav>
    );
}

function Contact () {
    return (
        <div className='col-[5_/_span_1] flex flex-row items-center gap-x-[10px]'>
            <div className="flex items-center justify-center bg-[#191970] w-[35px] h-[35px] rounded-[50%]">
                <img className="w-[22px] h-[22px]" src="/images/phone.png" alt=""/>
            </div>
            <p className='text-[#191970] text-[14px] font-medium'>+234 8023678559</p>
        </div>
    );
}

export {Menus, Contact};