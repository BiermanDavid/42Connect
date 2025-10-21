interface ClubMembersPageProps {
  clubName: string;
  onHomeClick: () => void;
  onClubsClick: () => void;
  onCalendarClick: () => void;
}

function ClubMembersPage({ clubName }: ClubMembersPageProps) {
  return (
    <img 
      src={`/${clubName}.svg`}
      alt={`${clubName} Members`}
      className="background-image"
    />
  );
}

export default ClubMembersPage;