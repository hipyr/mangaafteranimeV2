"use client";
import { useState, useEffect } from 'react';
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function Navbar() {
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const [disabled, setDisabled] = useState(true)  // when true it isn't disabled when false it is disabled
    const [userDropdown, setuserDropdown] = useState(false);

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

                        {isDropdownOpen && disabled ?
                            <div className={styles['recc-dropdown']} onMouseEnter={() => setIsDropDownOpen(!isDropdownOpen)} onMouseLeave={() => setIsDropDownOpen(!isDropdownOpen)}>
                                <div className={styles['dropdown-container']}>
                                    <div className='dropdown-items'>
                                        <p>Action</p>
                                    </div>
                                    <div>
                                        Adventuer
                                    </div>
                                    <div>
                                        category 4
                                    </div>
                                    <div>
                                        category 5
                                    </div>
                                    <div>
                                        category 6
                                    </div>
                                </div>
                            </div>
                            : null}
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
                {userDropdown ?
                    <div className={styles['recc-dropdown']} onMouseEnter={() => setIsDropDownOpen(!isDropdownOpen)} onMouseLeave={() => setIsDropDownOpen(!isDropdownOpen)}>
                        <ul className={styles['dropdown-container']}>
                            <li>Accounts</li>
                            <li>Settings</li>
                            <li>Likes</li>
                            <li>Themes</li>
                            <li>Subscriptions</li>

                        </ul>
                    </div> : null}
                {userDropdown ? < RiArrowDropDownLine /> : <RiArrowDropUpLine />}
            </div>
        </div>
    )
}