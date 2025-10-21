interface ClubPageProps {
  clubName: string;
  onHomeClick: () => void;
  onClubsClick: () => void;
  onCalendarClick: () => void;
  onMembersClick: () => void;
}

function ClubPage({ clubName, onMembersClick }: ClubPageProps) {
  return (
    <>
      <img 
        src={`/${clubName}.svg`}
        alt={`${clubName}`}
        className="background-image"
      />
      
      <div className="hitbox club-members-hitbox" onClick={onMembersClick} />
    </>
  );
}

export default ClubPage;