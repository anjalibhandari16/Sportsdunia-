import React from 'react';
import './styles1.css';
import './styles1.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ForumIcon from '@mui/icons-material/Forum';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import recentArticles from './data.json';

function page() {

    return (
        <div>
            <header>

                <div className="searchbar">
                    <input type="text"
                        placeholder="Search" />
                    <div className="searchbtn">
                        <SearchIcon
                            className="icn srchicn"
                            alt="search-icon" />
                    </div>
                </div>

                <div className="message">
                    <div className="circle"></div>
                    <NotificationsIcon
                        style={{ color: "#000", fontSize: '30px' }}
                        className="icn"
                        alt="" />
                    <div className="dp">
                        <AccountCircleIcon
                            style={{ color: "#FFF", fontSize: '40px' }}
                            className="dpicn"
                            alt="dp" />
                    </div>
                </div>

            </header>

            {/* navbarr */}

            <div className="main-container">
                <div className="navcontainer">
                    <nav className="nav">
                        <div className="nav-upper-options">
                            <div className="nav-option option1">
                                <DashboardIcon
                                    className="nav-img"
                                    alt="dashboard" />

                                <h3> Dashboard</h3>
                            </div>

                            <div className="option2 nav-option">
                                <NewspaperIcon
                                    className="nav-img"
                                    alt="articles"></NewspaperIcon>
                                <h3> Articles</h3>
                            </div>

                            <div className="nav-option option3">
                                <AssessmentIcon
                                    alt="report" />
                                <h3> Report</h3>
                            </div>

                            <div className="nav-option option4">
                                <AccountBalanceIcon
                                    className="nav-img"
                                    alt="institution" />
                                <h3> Institution</h3>
                            </div>

                            <div className="nav-option option5">
                                <RecentActorsIcon
                                    className="nav-img"
                                    alt="blog" />
                                <h3> Profile</h3>
                            </div>

                            <div className="nav-option option6">
                                <SettingsIcon
                                    className="nav-img"
                                    alt="settings" />
                                <h3> Settings</h3>
                            </div>

                            <div className="nav-option logout">
                                <LogoutIcon
                                    className="nav-img"
                                    alt="logout" />
                                <h3>Logout</h3>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="main">

                    <div className="searchbar2">
                        <input type="text"
                            name=""
                            id=""
                            placeholder="Search" />
                        <div className="searchbtn">
                            <SearchIcon
                                className="icn srchicn"
                                alt="search-button" />
                        </div>
                    </div>

                    <div className="box-container">

                        <div className="box box1">
                            <div className="text">
                                <h2 className="topic-heading">60.5k</h2>
                                <h2 className="topic">Article Views</h2>
                            </div>

                            <RemoveRedEyeIcon
                                style={{ color: "#fff", fontSize: '60px' }}
                                alt="Views" />
                        </div>

                        <div className="box box2">
                            <div className="text">
                                <h2 className="topic-heading">150</h2>
                                <h2 className="topic">Likes</h2>
                            </div>

                            <ThumbUpIcon
                                style={{ color: "#fff", fontSize: '60px' }}
                                alt="likes" />
                        </div>

                        <div className="box box3">
                            <div className="text">
                                <h2 className="topic-heading">320</h2>
                                <h2 className="topic">Comments</h2>
                            </div>

                            <ForumIcon
                                style={{ color: "#fff", fontSize: '60px' }}
                                alt="comments" />
                        </div>

                        <div className="box box4">
                            <div className="text">
                                <h2 className="topic-heading">70</h2>
                                <h2 className="topic">Published</h2>
                            </div>

                            <CheckCircleIcon
                                style={{ color: "#fff", fontSize: '60px' }}
                                alt="published" />
                        </div>
                        
                    </div>

                    <div className="report-container">
                        <div className="report-header">
                            <h1 className="recent-Articles">Recent Articles</h1>
                            <button className="view">View All</button>
                        </div>

                        <div className="report-body">
                            <div className="report-topic-heading">
                                <h3 className="t-op">Article</h3>
                                <h3 className="t-op">Views</h3>
                                <h3 className="t-op">Comments</h3>
                                <h3 className="t-op">Status</h3>
                            </div>

                            <div className="items">
                                {recentArticles.map(article => (
                                    <div key={article.id} className="item1">
                                        <h3 className="t-op-nextlvl">{article.title}</h3>
                                        <h3 className="t-op-nextlvl">{article.views}</h3>
                                        <h3 className="t-op-nextlvl">{article.comments}</h3>
                                        <h3 className="t-op-nextlvl label-tag">{article.status}</h3>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page