import { BsHouse,BsBuildings } from "react-icons/bs";
import { VscDesktopDownload } from "react-icons/vsc";
import { MdOutlineVilla } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { TbHomePlus } from "react-icons/tb";
import { PiStairsLight } from "react-icons/pi";

export const cities = [
    {
        label: 'All',
        icon: BsHouse
    },
    {
        label: 'San Francisco',
        icon: BsHouse
    },
    {
        label:'California',
        icon:BsHouse
    },
    {
        label:'New York',
        icon:BsBuildings
    },
    {
        label:'Baltimore',
        icon:VscDesktopDownload
    },
    {
        label:'Houseton',
        icon: MdOutlineVilla
    },
    {
        label:'Philadelphia',
        icon: GrHomeRounded
    },
    {
        label:'Los Angeles',
        icon: TbHomePlus
    },
    {
        label:'Austin',
        icon: PiStairsLight
    }
]