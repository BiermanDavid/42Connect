interface HomePageProps {
  onHomeClick: () => void;
  onClubsClick: () => void;
  onCalendarClick: () => void;
}

function HomePage({ onHomeClick, onClubsClick, onCalendarClick }: HomePageProps) {
  return (
    <>
      <img 
        src="/homepage.svg" 
        alt="Home Background" 
        className="background-image"
      />
      
      <img 
        src="/homebutton.svg" 
        alt="Home Button" 
        className="button-image-display home-button-overlay"
      />
      <img 
        src="/clubsbutton.svg" 
        alt="Clubs Button" 
        className="button-image-display clubs-button-overlay"
      />
      <img 
        src="/calenderbutton.svg" 
        alt="Calendar Button" 
        className="button-image-display calendar-button-overlay"
      />
      
      <div className="hitbox home-hitbox" onClick={onHomeClick} onTouchEnd={onHomeClick} />
      <div className="hitbox clubs-hitbox" onClick={onClubsClick} onTouchEnd={onClubsClick} />
      <div className="hitbox calendar-hitbox" onClick={onCalendarClick} onTouchEnd={onCalendarClick} />
    </>
  );
}

export default HomePage;