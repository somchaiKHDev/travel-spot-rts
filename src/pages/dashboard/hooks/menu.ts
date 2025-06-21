import DashboardPage from "../Dashboard";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

interface Menu {
  path: string;
  icon: any;
  component: any;
  title: string;
  display: boolean;
}

export const useMenu = () => {
  const menuConfigs: Menu[] = [
    {
      path: "",
      icon: HomeRoundedIcon,
      component: DashboardPage,
      title: "หน้าเเรก",
      display: true,
    },
  ];

  return {
    menuConfigs,
  };
};
