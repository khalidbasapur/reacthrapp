import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList, MenuItem, ListItemText } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const NavBar = () => {
  const menuItems = [
    {
      name: "General Settings",
      path: "/",
      component: "HomePage",
      exact: true,
    },
    {
      name: "Edit Fields",
      path: "/goal-setting",
      component: "FieldContainer",
      exact: false,
    },
  ];

  const [openCollapse, setOpenCollapse] = useState(false);

  return (
    <>
      <MenuList style={{ padding: 0 }}>
        {menuItems.map((prop, key) => {
          return (
            <NavLink
              to={prop.path}
              key={key}
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: `'Open Sans', sans-serif `,
              }}
            >
              <MenuItem
                style={{
                  background: "rgba(0,0,0,0.8)",
                  borderBottom: "1px solid white",
                }}
              >
                <ListItemText
                  primary={prop.name}
                  onClick={() => setOpenCollapse(!openCollapse)}
                />
                {openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </MenuItem>
            </NavLink>
          );
        })}
      </MenuList>
    </>
  );
};

export default NavBar;
