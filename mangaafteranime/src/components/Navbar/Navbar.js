"use client";
import { useState, useEffect } from 'react';
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri"
export default function Navbar() {
    const [isDropdownOpen, setIsDropDownOpen] = useState(false)
    const [userDropdown, setuserDropdown] = useState(false)
    return (
        <div className={styles["Navbar-container"]}>
            <div className={styles["Navbarleft-wrapper"]}>
                <div className={styles["logo-container"]}>
                    <img src="/templogo.png" />
                </div>
                <div className={styles["category-container"]}>
                    <div className={styles["category-wrapper"]} onMouseOver={() => setIsDropDownOpen(!isDropdownOpen)} onMouseLeave={() => setIsDropDownOpen(!isDropdownOpen)}>
                        <p>
                            Recommended
                        </p>
                        {isDropdownOpen ?
                            <div className={styles['recc-dropdown']} onMouseEnter={() => setIsDropDownOpen(!isDropdownOpen)} onMouseLeave={() => setIsDropDownOpen(!isDropdownOpen)}>
                                <ul className={styles['dropdown-items']}>
                                    <li>Action</li>
                                    <li>Adventure</li>
                                    <li>Romance</li>
                                    <li>Fighting</li>
                                    <li>Doujishin</li>
                                </ul>
                            </div> : null}
                        {isDropdownOpen ? < RiArrowDropDownLine /> : <RiArrowDropUpLine />}

                    </div>
                    <div className={styles["category-wrapper"]}>
                        <p>
                            Subscriptions
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles["searchbar-container"]}>
                <Searchbar />
            </div>
            <div className={styles["rightside-container"]} onMouseOver={() => setuserDropdown(!userDropdown)} onMouseLeave={() => setuserDropdown(!userDropdown)}>
                <img src="/star.png" />
                <img src="/testimg.jpg" id={styles["userico"]} />
                {userDropdown ? < RiArrowDropDownLine /> : <RiArrowDropUpLine />}
            </div>
        </div>
    )
}