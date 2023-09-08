import Link from "next/link";
import React from "react";

export default function NavigationBar(){
    return (
        <ul className="nav flex h-16 w-full items-center px-8 bg-primary/50">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">NAVBAR PLACEHOLDER</Link>
            </li>
        </ul>
    )
}