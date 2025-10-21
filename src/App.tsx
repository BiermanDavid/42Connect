import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ClubSearchListPage from './pages/ClubSearchListPage';
import ClubPage from './pages/ClubPage';
import ClubMembersPage from './pages/ClubMembersPage';

type PageType = 
  | 'login' 
  | 'home' 
  | 'calendar'
  | 'clubsearchlist'
  | 'quackintoshprime'
  | 'tabletitans'
  | 'thefinalcutclub'
  | 'goblinsonly'
  | 'adventurersguild'
  | 'quackintoshprimemembers'
  | 'tabletitansmembers'
  | 'thefinalcutclubmembers'
  | 'goblinsonlymembers'
  | 'adventurersguildmembers';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('login');

  const handleLogin = () => {
    setCurrentPage('home');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  const handleClubsClick = () => {
    setCurrentPage('clubsearchlist');
  };

  const handleCalendarClick = () => {
    setCurrentPage('calendar');
  };

  const handleClubClick = (club: PageType) => {
    setCurrentPage(club);
  };

  const handleClubMembersClick = (club: string) => {
    setCurrentPage(`${club}members` as PageType);
  };

  const renderPage = () => {
    if (currentPage === 'login') {
      return <LoginPage onLogin={handleLogin} />;
    }

    const showNavButtons = currentPage !== 'home';

    return (
      <>
        <img 
          src="/wallpaper.svg" 
          alt="Wallpaper" 
          className="wallpaper-image"
        />
        
        {currentPage === 'home' && (
          <HomePage
            onHomeClick={handleHomeClick}
            onClubsClick={handleClubsClick}
            onCalendarClick={handleCalendarClick}
          />
        )}

        {currentPage === 'calendar' && (
          <>
            <img 
              src="/calender.svg" 
              alt="Calendar" 
              className="background-image"
            />
          </>
        )}

        {currentPage === 'clubsearchlist' && (
          <ClubSearchListPage
            onHomeClick={handleHomeClick}
            onClubsClick={handleClubsClick}
            onCalendarClick={handleCalendarClick}
            onClubClick={handleClubClick}
          />
        )}

        {['quackintoshprime', 'tabletitans', 'thefinalcutclub', 'goblinsonly', 'adventurersguild'].includes(currentPage) && (
          <ClubPage
            clubName={currentPage}
            onHomeClick={handleHomeClick}
            onClubsClick={handleClubsClick}
            onCalendarClick={handleCalendarClick}
            onMembersClick={() => handleClubMembersClick(currentPage)}
          />
        )}

        {['quackintoshprimemembers', 'tabletitansmembers', 'thefinalcutclubmembers', 'goblinsonlymembers', 'adventurersguildmembers'].includes(currentPage) && (
          <ClubMembersPage
            clubName={currentPage}
            onHomeClick={handleHomeClick}
            onClubsClick={handleClubsClick}
            onCalendarClick={handleCalendarClick}
          />
        )}

        {showNavButtons && (
          <div className="nav-buttons">
            <div className="button-wrapper home-nav-wrapper" onClick={handleHomeClick} onTouchEnd={handleHomeClick}>
              <img src="/homebutton.svg" alt="Home" className="button-image-display" />
              <div className="hitbox home-hitbox" />
            </div>
            <div className="button-wrapper clubs-nav-wrapper" onClick={handleClubsClick} onTouchEnd={handleClubsClick}>
              <img src="/clubsbutton.svg" alt="Clubs" className="button-image-display" />
              <div className="hitbox clubs-hitbox" />
            </div>
            <div className="button-wrapper calendar-nav-wrapper" onClick={handleCalendarClick} onTouchEnd={handleCalendarClick}>
              <img src="/calenderbutton.svg" alt="Calendar" className="button-image-display" />
              <div className="hitbox calendar-hitbox" />
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
}

export default App;