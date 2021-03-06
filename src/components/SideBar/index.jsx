// SIDEBAR index.js


import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'



const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-white
                  text-white dark:bg-gray-900 shadow-lg
                  rounded-t
                  rounded-t-lg">

        <SideBarIcon icon={<FaFire size="28" />} />
        {/* discord line divide */}
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />

    </div>
  );
};

// react proptype that renders div with icons
// also adding tooltip
const SideBarIcon = ({icon, text = '(shlatt+//-^*)'}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div> 
);

// divider
const Divider = () => <hr className="sidebar-hr" />;

// EXPORTS
export default SideBar;