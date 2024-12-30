import React, { useState } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='grid grid-cols-3 gap-6'>
        {/* Project Boxes */}

        <div className="project-box" onClick={() => openModal(
            <div className='modal-project-overlay'>
                <div className='modal-project-img'>
                    <img src="./project1.png" alt="Project 1 Image" />
                </div>
                <div className='modal-project-text'>
                    <ul>
                        <li className='modal-project-textcolor1'>- Developed first in PyGame for HackNC in 2023, but then earlier this year I decided to make it a online game.</li>
                        <li className='modal-project-textcolor2'>- Used Phaser.js for web compatibility</li>
                        <li className='modal-project-textcolor1'>- I used Next.js and React for the front-end (like this website)</li>
                        <li className='modal-project-textcolor2'>- Supabase for user authentication and their database for online users</li>
                        <li className='modal-project-textcolor1'>- The database and user auth integration caused challenges but overcoming this enhanced my problem solving for this type of integration</li>
                    </ul>
                </div>
            </div>
            
        )}>
            <h3 className="project-text">HayBale Game</h3>
            <h1 className="project-sub-text">PostgreSQL, React, Supabase, APIs, Phaser.js</h1>
        </div>

        <div className="project-box" onClick={() => openModal(
            <div className='modal-project-overlay'>
                <div className='modal-project-img'>
                    <img src="./bot.png" alt="Project 2 Image" />
                </div>
                <div className='modal-project-text'>
                    <ul>
                        <li className='modal-project-textcolor1'>- Developed for people in my Discord server. It used Discord's API</li>
                        <li className='modal-project-textcolor2'>- It was for fun and I enjoyed seeing people interact with something I developed</li>
                    </ul>
                </div>
            </div>
        )}>
            <h3 className="project-text">Discord Bot</h3>
            <h1 className="project-sub-text">APIs, Python</h1>
        </div>

        <div className="project-box" onClick={() => openModal(
            <div className='modal-project-overlay'>
                <div className='modal-project-img'>
                    <img src="./2Dgame.png" alt="Project 2 Image" />
                </div>
                <div className='modal-project-text'>
                    <ul>
                        <li className='modal-project-textcolor1'>- Developed using Eclipse IDE</li>
                        <li className='modal-project-textcolor2'>- All the code was Java and this was my first time learning about game code</li>
                        <li>- Experienced with objects, frameworks, and game panels</li>
                        <li>- Interesting part was learning how collision works within a game. </li>

                    </ul>
                </div>
            </div>
        )}>
            <h3 className="project-text">2D Game</h3>
            <h1 className="project-sub-text">Java</h1>
        </div>

        <div className="project-box" onClick={() => openModal('Project 4 Details')}>
            <h3 className="project-text">News Scraper</h3>
            <h1 className="project-sub-text">APIs, HTML, CSS, Javascript</h1>
        </div>

        <div className="project-box" onClick={() => openModal('Project 5 Details')}>
            <h3 className="project-text">Wildfire Detection Project</h3>
            <h1 className="project-sub-text">ML, CNN, PyTorch, Python, Kaggle</h1>
        </div>

        <div className="project-box" onClick={() => openModal('Project 6 Details')}>
            <h3 className="project-text">Drone Website</h3>
            <h1 className="project-sub-text">HTML, CSS, Javascript</h1>
        </div>

        <div className="project-box" onClick={() => openModal('Project 7 Details')}>
            <h3 className="project-text">1v1 PyGame</h3>
            <h1 className="project-sub-text">Python, PyGame</h1>
        </div>

        <div className="project-box" onClick={() => openModal('Project 8 Details')}>
            <h3 className="project-text">Python Autoclicker</h3>
            <h1 className="project-sub-text">Python, Automation</h1>
        </div>

        <div className="project-box" onClick={() => openModal('Project 9 Details')}>
            <h3 className="project-text">Portfolio Website</h3>
            <h1 className="project-sub-text">React, Next.js, TypeScript</h1>
        </div>


      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
        <div className="modal-box">
          <p>{modalContent}</p>
          <button
            onClick={closeModal}
            className="modal-close-button"
          >
            Close
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Modal;
