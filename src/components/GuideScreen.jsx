const SECTIONS = [
  { id: 'around', label: 'Getting around' },
  { id: 'planning', label: 'Planning a trip' },
  { id: 'itinerary', label: 'Your itinerary' },
  { id: 'hotels', label: 'Hotels' },
  { id: 'collab', label: 'Collaborating' },
  { id: 'flights', label: 'Flights & alerts' },
  { id: 'import', label: 'Importing a flight' },
  { id: 'notes', label: 'Good to know' },
];

const sectionLabel = { fontSize: 12, fontWeight: 700, color: '#E0663F', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6 };
const h2 = { fontFamily: "'Newsreader',serif", fontSize: 22, fontWeight: 600, color: '#1E2C38', marginBottom: 10 };
const h3 = { fontFamily: "'Newsreader',serif", fontSize: 15.5, fontWeight: 600, color: '#1E2C38', marginTop: 16, marginBottom: 6 };
const body = { fontSize: 14, lineHeight: 1.65, color: '#33404A', marginBottom: 0, maxWidth: 620 };
const section = { marginBottom: 42, scrollMarginTop: 20 };

function Step({ n, title, children }) {
  return (
    <div style={{ display: 'flex', gap: 14, marginTop: 14 }}>
      <div
        style={{
          flexShrink: 0,
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#1E2C38',
          color: '#FAF5EC',
          fontSize: 11,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {n}
      </div>
      <div>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: '#1E2C38', marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 13, color: '#7C7264', lineHeight: 1.55 }}>{children}</div>
      </div>
    </div>
  );
}

function Note({ children }) {
  return (
    <div style={{ background: '#F1E8D8', borderRadius: 14, padding: '14px 16px', marginTop: 14, maxWidth: 620 }}>
      <div style={{ fontSize: 13.5, color: '#1E2C38', lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

function KnowRow({ title, children }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '14px 16px', marginBottom: 10, border: '1px solid #F0E9DC', maxWidth: 620 }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: '#1E2C38', marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13, color: '#7C7264', lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

export default function GuideScreen() {
  return (
    <div className="screen-pad" style={{ animation: 'riseIn 0.3s ease both', maxWidth: 680 }}>
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 30, fontWeight: 600, color: '#1E2C38', marginBottom: 4 }}>User Guide</div>
      <div style={{ fontSize: 14, color: '#8A8072', marginBottom: 22 }}>
        Plan a trip with AI, book a place to stay, collaborate with your group, and keep an eye on your flights.
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 34 }}>
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#guide-${s.id}`}
            style={{ fontSize: 12, fontWeight: 700, color: '#33404A', background: '#fff', border: '1px solid #EAE1CF', padding: '7px 12px', borderRadius: 10, textDecoration: 'none' }}
          >
            {s.label}
          </a>
        ))}
      </div>

      <div id="guide-around" style={section}>
        <div style={sectionLabel}>Layout</div>
        <div style={h2}>Getting around</div>
        <div style={body}>
          Everything lives behind three tabs in the left sidebar: <strong>Trips</strong>, where you plan and browse, <strong>Flights</strong>, where you
          track what's booked, and this <strong>Guide</strong>. The orange "+ New Trip" button is always one click away.
        </div>
      </div>

      <div id="guide-planning" style={section}>
        <div style={sectionLabel}>01</div>
        <div style={h2}>Planning a trip with AI</div>
        <div style={body}>
          Every trip starts on the Your Trips screen. Existing trips show up as cards you can click into, or start a new one with "+ New Trip" — the form
          walks through four things:
        </div>
        <Step n="1" title="Destination">Type a city — e.g. "Lisbon, Portugal." This drives everything the AI suggests next.</Step>
        <Step n="2" title="Trip length & budget">Drag the sliders — 2 to 15 days, and a total budget from $200 to $10,000.</Step>
        <Step n="3" title="Travel style & interests">Pick one style (Luxury, Budget, Adventure, or Cultural) and as many interests as apply.</Step>
        <Step n="4" title="Generate">
          The AI works through a short checklist — preferences, hidden gems, route, budget — before landing you on the finished itinerary.
        </Step>
      </div>

      <div id="guide-itinerary" style={section}>
        <div style={sectionLabel}>View</div>
        <div style={h2}>Your itinerary</div>
        <div style={body}>
          Every trip opens to a day-by-day view: tabs across the top for each day, a scrollable activity list, and a live map with a numbered marker for
          every stop on that day — the numbers match the list. Every day of the trip is planned — from check-in on day one through a farewell activity on
          the final day.
        </div>
        <div style={h3}>Reading an activity</div>
        <div style={body}>
          Each row shows a numbered pin, the time, the name, a category tag, and — where relevant — a cost. Click the pin to pan the map to that stop's
          marker; click anywhere else on the card to edit it. Where a real, verified listing exists, "View on Booking.com" links straight to it.
        </div>
        <Note>
          🔒 Only the person who added an activity can delete it. If someone else added it, the Delete button is disabled.
        </Note>
      </div>

      <div id="guide-hotels" style={section}>
        <div style={sectionLabel}>New</div>
        <div style={h2}>Hotels</div>
        <div style={body}>
          Open the <strong>Hotels</strong> toggle at the top of any trip (next to "Itinerary") to manage where you're staying.
        </div>
        <div style={h3}>Importing a reservation</div>
        <div style={body}>Click "Import a reservation," paste your booking confirmation email, and it's added to your trip once parsed — same flow as flight import below.</div>
        <div style={h3}>Suggestions based on your budget</div>
        <div style={body}>
          Below your booked hotels, TravelAI shows three tiers — Budget, Mid-range, and Luxury — sized to the destination. The one that best fits your
          trip's budget (roughly 40% of it allocated to lodging) is marked <strong>"Matches your budget."</strong> Click "Add to trip" on any of them, or
          "View on Booking.com" to see the real listing.
        </div>
      </div>

      <div id="guide-collab" style={section}>
        <div style={sectionLabel}>Group trips</div>
        <div style={h2}>Collaborating with your group</div>
        <div style={body}>
          Open the member badge in the top-right of any trip to see who's on it and invite more people. Type an email and click Invite — the new
          collaborator shows up immediately, marked <strong>Pending</strong> until they join. Trips with more than one joined member automatically show
          "Added by [name]" on every activity.
        </div>
      </div>

      <div id="guide-flights" style={section}>
        <div style={sectionLabel}>Tracking</div>
        <div style={h2}>Flights & alerts</div>
        <div style={body}>
          The Flights tab lists every flight on file with alerts on by default. Toggle the switch on any card to turn its alerts off. An active alert
          appears as a banner you can dismiss with the × or snooze for 30 minutes.
        </div>
      </div>

      <div id="guide-import" style={section}>
        <div style={sectionLabel}>02</div>
        <div style={h2}>Importing a flight from email</div>
        <div style={body}>Use "Auto-detect a flight" at the top of the Flights screen instead of typing details by hand:</div>
        <Step n="1" title="Paste the email">Copy your confirmation email into the box and click Parse email.</Step>
        <Step n="2" title="Extraction">A short loading state extracts the flight number, airline, route, times, seat, and confirmation code.</Step>
        <Step n="3" title="Review & add">Check the details, then click Add to trip to drop it straight into your Flights list.</Step>
      </div>

      <div id="guide-notes" style={section}>
        <div style={sectionLabel}>Before you go</div>
        <div style={h2}>Good to know</div>
        <KnowRow title="Refreshing the page">
          This build keeps trips, flights, and hotels in memory only — reloading the browser resets everything back to the seeded Tokyo Adventure trip.
        </KnowRow>
        <KnowRow title="Deleting activities">Restricted to whoever originally added that activity, even in a group you organize.</KnowRow>
        <KnowRow title="Where recommendations come from">
          Tokyo, Lisbon, Barcelona, Paris, London, Rome, Amsterdam, Athens, Bangkok, Dubai, Singapore, Cairo, and New York have hand-curated,
          day-by-day itineraries and hotel picks sourced from real, live Booking.com listings — real names, areas, prices, and ratings, each linking
          straight to the real page. Any other destination isn't pre-verified, so instead of guessing a specific place, every activity and hotel
          links out to a real, live Booking.com search for that city — nothing is invented.
        </KnowRow>
        <KnowRow title="Email parsing">Flight and hotel email extraction are simulated for this prototype — both return a sample result rather than reading your pasted text.</KnowRow>
      </div>
    </div>
  );
}
