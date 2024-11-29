import React from 'react'

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useSelector } from 'react-redux';
import { selectIdValue } from '../../redux/feature/countSlice';
import { useState } from 'react';

import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { selectTotalItems } from '../../redux/addToCart/addToCartSlice';


export default function NavbarComponet() {

  const [navBarList, setNavbarList] = useState([
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "counter",
      path: "/counter",
      active: false,
    },
    {
      name: "Products",
      path: "/product",
      active: false,
    },
    {
      name: "Customer",
      path: "/customer",
      active: false,
    },
    {
      name: "StaffType",
      path: "/staffType",
      active: false,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      active: false,
    },
  ]);

  const handleOnClick = (item) => {
    setNavbarList((prevList) =>
      prevList.map((list) =>
        list.name === item.name
          ? { ...list, active: true }
          : { ...list, active: false }
      )
    );
  };

    const count1=useSelector(selectIdValue);

    const totalItems = useSelector(selectTotalItems)
  return (
    <Navbar fluid rounded className="bg-coffee-dark shadow-md rounded-none">
      {/* Brand Section */}
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/135/135720.png"
          className="mr-3 h-10"
          alt="Coffee Shop Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-coffee-light">
          Aroma Café
        </span>
      </Navbar.Brand>

      {/* User Section */}
      <div className="flex items-center md:order-2">
        {/* Avatar Dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          // label={
          //   <Avatar
          //     alt="User settings"
          //     img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          //     rounded
          //   />
          // }
        >
          <Dropdown.Header>
            <span className="block text-sm font-medium">Bonnie Green</span>
            <span className="block truncate text-sm">name@aromacafe.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      {/* Navbar Links */}
      <Navbar.Collapse>
        {navBarList.map((list, index) => (
          <Navbar.Link
            onClick={() => handleOnClick(list)}
            as={Link}
            to={list.path}
            active={list.active}
            key={index}
            className={`text-coffee-light hover:text-accent ${
              list.active ? "font-bold underline" : ""
            }`}
          >
            {list.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>

      {/* Cart and Register Section */}
      <div className="relative flex items-center gap-6 md:order-3">
        {/* Cart */}
        <div className="relative">
          <Link to="/addToCart" className="text-coffee-light">
            <FaCartArrowDown size={24} />
          </Link>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>

        {/* Register Button */}
        <Link to="/register">
          <button className="bg-accent text-white py-1 px-4 rounded-md shadow hover:bg-yellow-600">
            Register
          </button>
        </Link>
      </div>
    </Navbar>
  );
}
