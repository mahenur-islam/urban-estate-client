import { BsHouse,BsBuildings } from "react-icons/bs";
import { VscDesktopDownload } from "react-icons/vsc";
import { MdOutlineVilla } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { TbHomePlus } from "react-icons/tb";
import { PiStairsLight } from "react-icons/pi";

export const categories = [
    {
        label: 'All',
        icon: BsHouse
    },
    {
        label:'Houses',
        icon:BsHouse
    },
    {
        label:'Apartments',
        icon:BsBuildings
    },
    {
        label:'Office',
        icon:VscDesktopDownload
    },
    {
        label:'Villa',
        icon: MdOutlineVilla
    },
    {
        label:'Townhall',
        icon: GrHomeRounded
    },
    {
        label:'Bunglow',
        icon: TbHomePlus
    },
    {
        label:'Loft',
        icon: PiStairsLight
    }
]