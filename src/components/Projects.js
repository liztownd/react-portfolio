import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([
        {
            title: 'React Employee Directory',
            image: 'assets/images/empDir.png',
            description: 'A React Employee Directory, populated with data from the randomuser.me API using hooks for sort and filter functionality.',
            gitUrl: 'https://github.com/liztownd/employee-directory',
            deployUrl: 'https://liztownd.github.io/employee-directory/',
        },
        {
            title: 'devlr',
            image: 'assets/images/devlr.png',
            description: 'Twitter + GitHub = devlr, a social networking site for devs. Express server used to deliver data from an SQL database and the GitHub API using jQuery, handlebars, and CSS variables to update content dynamically.',
            gitUrl: 'https://github.com/liztownd/devlr',
            deployUrl: 'https://devlr.herokuapp.com',
        },
        {
            title: 'Eat That Burger! App',
            image: 'assets/images/burger.png',
            description: 'A simple burger tracker built with an Express.js server, with express-handlebars-based html, accessing an SQL database using ORM and MVC architecture, deployed to Heroku.',
            gitUrl: 'https://github.com/liztownd/burger',
            deployUrl: 'https://mighty-citadel-87170.herokuapp.com/',
        },
        {
            title: 'fanPagR',
            image: 'assets/images/fanPagR.png',
            description: 'A custom fan page generator utilizing jQuery to populate dynamic content from multiple third-party APIs and various CSS theme files.',
            gitUrl: 'https://github.com/cmoss703/fanPagR',
            deployUrl: 'https://cmoss703.github.io/fanPagR/',
        },
        {
            title: 'Weather Dashboard',
            image: 'assets/images/weather-dashboard.png',
            description: 'A JavaScript based weather dashboard accessing the Open Weather API utilizing Bootstrap for styling and JavaScript and jQuery to serve dynamic content.',
            gitUrl: 'https://github.com/liztownd/weather-app',
            deployUrl: 'https://liztownd.github.io/weather-app/',
        },
        {
            title: 'Tradeshow Website',
            image: 'assets/images/ipms.png',
            description: 'Website for a yearly tradeshow: International Paper Money Show.',
            gitUrl: '#',
            deployUrl: 'http://www.ipmskansascity.com',
        },
    ]);

    const allProj = [
        {
            title: 'React Employee Directory',
            image: 'assets/images/empDir.png',
            description: 'A React Employee Directory, populated with data from the randomuser.me API using hooks for sort and filter functionality.',
            gitUrl: 'https://github.com/liztownd/employee-directory',
            deployUrl: 'https://liztownd.github.io/employee-directory/',
        },
        {
            title: 'devlr',
            image: 'assets/images/devlr.png',
            description: 'Twitter + GitHub = devlr, a social networking site for devs. Express server used to deliver data from an SQL database and the GitHub API using jQuery, handlebars, and CSS variables to update content dynamically.',
            gitUrl: 'https://github.com/liztownd/devlr',
            deployUrl: 'https://devlr.herokuapp.com',
        },
        {
            title: 'Eat That Burger! App',
            image: 'assets/images/burger.png',
            description: 'A simple burger tracker built with an Express.js server, with express-handlebars-based html, accessing an SQL database using ORM and MVC architecture, deployed to Heroku.',
            gitUrl: 'https://github.com/liztownd/burger',
            deployUrl: 'https://mighty-citadel-87170.herokuapp.com/',
        },
        {
            title: 'fanPagR',
            image: 'assets/images/fanPagR.png',
            description: 'A custom fan page generator utilizing jQuery to populate dynamic content from multiple third-party APIs and various CSS theme files.',
            gitUrl: 'https://github.com/cmoss703/fanPagR',
            deployUrl: 'https://cmoss703.github.io/fanPagR/',
        },
        {
            title: 'Weather Dashboard',
            image: 'assets/images/weather-dashboard.png',
            description: 'A JavaScript based weather dashboard accessing the Open Weather API utilizing Bootstrap for styling and JavaScript and jQuery to serve dynamic content.',
            gitUrl: 'https://github.com/liztownd/weather-app',
            deployUrl: 'https://liztownd.github.io/weather-app/',
        },
        {
            title: 'Tradeshow Website',
            image: 'assets/images/ipms.png',
            description: 'Website for a yearly tradeshow: International Paper Money Show.',
            gitUrl: '#',
            deployUrl: 'http://www.ipmskansascity.com',
        },
        {
            title: 'Graphic Design Portfolio',
            image: 'assets/images/tom-1.jpg',
            description: 'Liz has been a graphic designer since 2001.',
            gitUrl: '#',
            deployUrl: 'http://www.liztowndesign.com',
        },
    ]

   
    //const initProj = (allProj.slice(0, 6));
   


    // function handleOnClick(e){
    //     e.preventDefault();
    //     shuffleProj();
    // };

    // function shuffleProj(){

    // }

    return (
        <main className="container-lg mx-auto mt-1 mb-5">
            <div className="container mx-auto p-3 my-3">
                <div className="d-flex justify-content-between m-4">
                <h2 className="text-light ">Portfolio</h2>
                <button className="btn btn-sm btn-light">Shuffle Projects</button>
                </div>
                <div className="row mx-auto">
                {projects.map((p) =>
                    <ProjectCard
                        title={p.title}
                        description={p.description}
                        image={p.image}
                        gitUrl={p.gitUrl}
                        deployUrl={p.deployUrl}
                    />
                    
                )}
                </div>
            </div>
        </main>
    )
}

export default Projects
