import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './posts-component.css';
import '../../paths.js'
import { POSTS_PATH } from "../../paths.js";

export default function PostsComponent() {
    const [infoData, setInfoData] = useState([]);
    const infoPath = "../../../posts/info.json";
    
    useEffect(() => {
        fetch(infoPath)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.text();
        })
        .then(data => setInfoData(JSON.parse(data).reverse())) // reversed to show the latest post first
        .catch(error => console.error('Error fetching JSON file:', error));
    }, []);

    return (
        <div class="content">
            <div className="posts-container">
                {infoData.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={`${POSTS_PATH}/${item.id}`} className="post-link">
                        <section className="post-section">
                            <div class="heading">
                                <h2>{`${item.title}`}</h2>
                                <p>{getDateString(
                                    item.dateCreated[0],
                                    item.dateCreated[1],
                                    item.dateCreated[2]
                                )}</p>
                            </div>
                            <div class="post-description">{`${item.description}`}</div>
                        </section>
                        </Link>
                        {index < infoData.length - 1 && <hr className="separator" />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

function getDateString(date, month, year) {
    const monthStringMap = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    };
    return `${monthStringMap[month]} ${date}, ${year}`;
}