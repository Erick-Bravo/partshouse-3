import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaBrain, FaHome, FaFan, FaTools } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { BsPrinterFill } from "react-icons/bs";
import { GiBodyBalance, GiCircularSawblade } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
import { IoBarbellSharp, IoWaterSharp } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";
import {
  CgSmartHomeRefrigerator,
  CgSmartHomeWashMachine,
} from "react-icons/cg";
/*
Refrigerator v
home v
printer v
water v
brain v
saw v
computer v
laptop v
washing machine v
fan v
tool v
fitness v
Coffee v
*/

const IconFormatter = ({ icon, size }) => {
  let logo;

    if (icon === "home") {
      logo = FaHome;
    }
    if (icon === "mail") {
      logo = MdMailOutline;
    }
    if (icon === "printer") {
      logo = BsPrinterFill;
    }
    if (icon === "water") {
      logo = IoWaterSharp;
    }
    if (icon === "brain") {
      logo = FaBrain;
    }
    if (icon === "fan") {
      logo = FaFan;
    }
    if (icon === "tool") {
      logo = FaTools;
    }
    if (icon === "fitness") {
      logo = GiBodyBalance;
    }
    if (icon === "coffee") {
      logo = SiCoffeescript;
    }
    if (icon === "barbel") {
      logo = IoBarbellSharp;
    }
    if (icon === "computer") {
      logo = RiComputerFill;
    }
    if (icon === "saw") {
      logo = GiCircularSawblade;
    }
    if (icon === "laptop") {
      logo = GrPersonalComputer;
    }
    if (icon === "refrigerator") {
      logo = CgSmartHomeRefrigerator;
    }
    if (icon === "washing machine") {
      logo = CgSmartHomeWashMachine;
    }

  return <Icon as={logo} boxSize={size} />;
};

export default IconFormatter;

/*

Home:

*/