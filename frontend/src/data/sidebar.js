import { FaTh, FaCommentAlt  } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";


import { FcBusinessman , FcAbout , FcAddImage , FcGrid} from "react-icons/fc";


const menu = [
  {
    title: "Dashboard",
    icon: <FcGrid />,
    path: "/dashboard",
  },
  {
    title: "Add Project",
    icon: <FcAddImage />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FcBusinessman/>,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FcAbout />,
    path: "/contact-us",
  },
];

export default menu;
