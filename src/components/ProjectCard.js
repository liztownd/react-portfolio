import React from 'react'

function ProjectCard({ title, description, image, gitUrl, deployUrl }) {
    return (
        <div class="col-md-4 col-sm-12 mb-4">
        <div className="card h-100 port-card float-left" >
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-body">
                <a href={deployUrl} target="_blank" className="card-link" rel="noreferrer">Deployed Application</a>
                <a href={gitUrl} target="_blank" className="card-link" rel="noreferrer">GitHub Repo</a>

            </div>
        </div>
        </div>

    )
}

export default ProjectCard
