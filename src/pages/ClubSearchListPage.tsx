interface ClubSearchListPageProps {
  onHomeClick: () => void;
  onClubsClick: () => void;
  onCalendarClick: () => void;
  onClubClick: (club: 'quackintoshprime' | 'tabletitans' | 'thefinalcutclub' | 'goblinsonly' | 'adventurersguild') => void;
}

function ClubSearchListPage({ onClubClick }: ClubSearchListPageProps) {
  return (
    <>
      <img 
        src="/clubsearchlist.svg" 
        alt="Club Search List" 
        className="background-image"
      />
      
      <div className="hitbox club1-hitbox" onClick={() => onClubClick('quackintoshprime')} />
      <div className="hitbox club2-hitbox" onClick={() => onClubClick('tabletitans')} />
      <div className="hitbox club3-hitbox" onClick={() => onClubClick('thefinalcutclub')} />
      <div className="hitbox club4-hitbox" onClick={() => onClubClick('goblinsonly')} />
      <div className="hitbox club5-hitbox" onClick={() => onClubClick('adventurersguild')} />
    </>
  );
}

export default ClubSearchListPage;