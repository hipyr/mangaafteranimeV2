"use client";
import { useState, useEffect } from 'react';
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Search } from "./Navbar.module.scss";
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
                    <div className={styles["category-wrapper"]} onMouseEnter={() => setIsDropDownOpen(!isDropdownOpen)} onMouseLeave={() => setIsDropDownOpen(!isDropdownOpen)}>
                        <p>
                            Recommended
                        </p>
                        {isDropdownOpen ?
                            <div className={styles['recc-dropdown']}>
                                <div className={styles['dropdown-container']}>
                                    <div className={styles['dropdown-items']}>
                                        <p>Action</p>
                                    </div>
                                    <div>
                                        <p>Adventure</p>
                                    </div>
                                    <div>
                                        <p>Romance</p>
                                    </div>
                                    <div>
                                        <p>Shonen</p>
                                    </div>
                                    <div>
                                        <p>Isekai</p>
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
            <div className={styles["rightside-container"]}>
                <img src="/star.png" />
                <div className={styles['pfp-wrapper']} onMouseLeave={() => setuserDropdown(!userDropdown)} onMouseEnter={() => setuserDropdown(!userDropdown)}>
                <img src="/testimg.jpg" id={styles["userico"]} />
                </div>
                {userDropdown ?
                    <div className={styles['account-container']} >
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