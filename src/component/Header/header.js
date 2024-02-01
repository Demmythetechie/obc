import {Menus, Contact} from "./menu.js";

function Header() {
    return (
        <div className="grid grid-cols-[126px_auto_400px_auto_160px] p-[5px_7%_5px_7%] w-full">
            <img className=" col-[1_/_span_1] w-[126px] h-[41px]" src="/images/obc_logo.png" alt=""/>
            <Menus/>
            <Contact/>
        </div>
    );
}


export default Header;