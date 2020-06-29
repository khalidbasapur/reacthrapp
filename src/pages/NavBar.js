import React from "react";
import { NavLink } from "react-router-dom";
import { MenuList, MenuItem, ListItemText } from "@material-ui/core";

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

  return (
    <>
      <MenuList style={{ padding: 0 }}>
        {menuItems.map((prop, key) => {
          return (
            <NavLink
              to={prop.path}
              key={key}
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem
                style={{
                  background: "rgba(0,0,0,0.8)",
                  borderBottom: "1px solid white",
                }}
              >
                <ListItemText primary={prop.name} />
              </MenuItem>
            </NavLink>
          );
        })}
      </MenuList>
    </>
  );
};

export default NavBar;
