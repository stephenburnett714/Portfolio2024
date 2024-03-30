interface Project {
  title: string;
  description: string;
  liveSite: string;
  gitHub: string;
  image: string;
}

interface PortfolioProps {
  PortfolioData: Project[];
}

const PortfolioDataFormat: React.FC<PortfolioProps> = ({ PortfolioData }) => {
  return (
    <div>
      {PortfolioData.map((project, index) => (
        <div key={index}>
          <div className="lg:grid lg:grid-cols-2 shadow-lg p-8 my-4 rounded-lg max-h-128">
          <div className="flex justify-center lg:self-center lg:flex-none pb-4 lg:pb-0">
              <div className="image-height">
                <img
                  className="w-auto rounded-lg lg:max-h-64"
                  src={project.image}
                  alt=""
                />
              </div>
            </div>
            <div className="self-center px-4">
              <div className="text-3xl lg:text-4xl pb-2">{project.title}</div>
              <div className="pb-3 text-sm lg:text-base">{project.description}</div>
              <div className="flex justify-around pt-2">
                <button className="larger-text rounded-full px-3 text-lg font-bold border border-black transform hover:scale-105 transition-all duration-300">
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="larger-text"
                  >
                    Live Site
                  </a>
                </button>
                <button className="larger-text rounded-full px-3 text-lg font-bold border border-black transform hover:scale-105 transition-all duration-300">
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="larger-text"
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioDataFormat;
