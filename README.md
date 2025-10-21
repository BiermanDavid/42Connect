42Connect 🚀

42Connect is a student networking app for 42 Heilbronn that centralizes events, clubs, and a campus calendar so students can find, join, and organize activities easily.
Mission Statement 🎯

Goal: Make the social experience at 42 Heilbronn accessible to everyone by providing a single place to host events, create and manage clubs, and view a centralized campus calendar. Impact: Reduce fragmentation, surface active groups, and enable students to organize activities outside official school events.
Our Solution 💡

What 42Connect does

    Centralized calendar to visualize official intra events and student-created events.

    User-created events for meetups, weekly meetings, and special activities.

    Club creation and management for rosters, leadership, and mission statements.

    Club activity indicators planned to highlight active versus defunct clubs.

Current state

    Mobile-friendly prototype with page navigation and core club/event flows.

    Roadmap includes intra API integration, activity indicators, and advanced filtering.

Methods 🛠️

Tech stack

    n8n, Grafana, Docker, TypeScript. Deployment

    Temporary web server hosts the demo for briefing and mobile navigation testing.

The Way Ahead 🔭

    Integrate intra login for secure student authentication.

    Publish native apps to Google Play and Apple App Store.

    Expand club management with advanced sorting, filtering, and private/public options.

    Enhance calendar with categories, RSVP, recurring events, and activity indicators.

    Set up robust security measures and event notification systems.

Flow Diagram as File/Folder Structure 📁

    HomePage
    ├── click on home symbol
    │     └── HomePage / nothing happens
    ├── click on "Club Page" Symbol Middle Bottom
    │     └── redirects to Clubs Page
    ├── click on "Calendar"
    │     └── redirects to Calendar
    ├── click on "42 Game Dev Club"
    │     └── "42 Game Dev Club" Club Page
    ├── click on "Goblins only"
    │     └── "Goblins only" Club Page
    ├── click on "Karaoke Club"
    │     └── "Karaoke Club" Club Page
    └── click on "Members"
          └── Club Page with Member List
    
    ClubsPage
    ├── click on Members
    │     └── List of all Members show
    ├── click on "New Club Event"
    │     └── redirect to "New Event" Page
    ├── click on "Create New Club"
    │     └── redirect to "Create New Club" Page
    ├── click on "Find Clubs"
    │     └── redirect to "List of all Club" Page
    ├── click on the Clubs on the "Clubs Page"
    │     ├── redirects to the certain Club
    │     └── same with clicking on "JOIN"
    ├── click on "HomePage"
    │     └── redirects back to "HomePage"
    ├── click on "Clubs Page"
    │     └── to "Clubs Page"
    └── click on Calendar
          └── redirects to Calendar
    
    Calendar
    ├── click on "HomePage"
    │     └── redirect to "HomePage"
    ├── click on "Clubs Page"
    │     └── redirect to "Clubs Page"
    └── click on "Plus" Symbol on bottom right
          └── redirect to "New Event" Page
                └── click on "Return" Symbol on bottom left
                      └── return to Calendar before Event created


Demo Notes ⚠️

Purpose: Demo is for briefing and evaluation. Limitations: Authentication, full intra integration, club activity indicators, backend, security features and advanced filtering are not implemented.

