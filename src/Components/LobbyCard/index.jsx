import { Link } from "react-router-dom";
import * as React from 'react';

export default function({ show }) {
    return <div className="lobby-card">
        <div className="lobby-card__title">
            {show.name}
        </div>
        <div className="lobby-card__image">
            <img src={show.image ? show.image.medium : ""}/>
        </div>
        <div className="lobby-card__detail">
            <Link to={"/show/" + show.id}>Details</Link>
        </div>
    </div>
}