import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TripsHome from './components/TripsHome';
import NewTripForm from './components/NewTripForm';
import GeneratingScreen from './components/GeneratingScreen';
import ItineraryScreen from './components/ItineraryScreen';
import FlightsScreen from './components/FlightsScreen';
import GuideScreen from './components/GuideScreen';
import MembersSheet from './components/modals/MembersSheet';
import ActivitySheet from './components/modals/ActivitySheet';
import FlightImportSheet from './components/modals/FlightImportSheet';
import HotelImportSheet from './components/modals/HotelImportSheet';
import { AVATAR_COLORS, GEN_STEPS, initialFlights, pickItinerary, tokyoTrip } from './data';

const SHOW_ADDED_BY_TAGS = true;
const FLIGHT_ALERT_DEMO = true;

export default function App() {
  const [tab, setTab] = useState('trips');
  const [tripScreen, setTripScreen] = useState('home');
  const [currentTripId, setCurrentTripId] = useState('tokyo');
  const [activeDay, setActiveDay] = useState(1);
  const [sheet, setSheet] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [genStep, setGenStep] = useState(0);
  const [trips, setTrips] = useState([tokyoTrip()]);
  const [flights, setFlights] = useState(initialFlights());
  const [form, setForm] = useState({ destination: 'Lisbon, Portugal', days: 5, budget: 2200, style: 'adventure', interests: ['food', 'history'] });
  const [inviteEmail, setInviteEmail] = useState('');
  const [editDraft, setEditDraft] = useState({});
  const [importText, setImportText] = useState('');
  const [importState, setImportState] = useState('idle');
  const [extractedFlight, setExtractedFlight] = useState(null);
  const [mapFocusId, setMapFocusId] = useState(null);
  const [tripSection, setTripSection] = useState('itinerary');
  const [hotelImportText, setHotelImportText] = useState('');
  const [hotelImportState, setHotelImportState] = useState('idle');
  const [extractedHotel, setExtractedHotel] = useState(null);

  const findTrip = (id) => trips.find((t) => t.id === id);
  const currentTrip = findTrip(currentTripId) || trips[0];

  function openTrip(id) {
    setTripScreen('itinerary');
    setCurrentTripId(id);
    setActiveDay(1);
    setMapFocusId(null);
    setTripSection('itinerary');
  }
  function goHome() {
    setTripScreen('home');
  }
  function openForm() {
    setTripScreen('form');
    setTab('trips');
  }
  function backFromForm() {
    setTripScreen('home');
  }
  function goToTrips() {
    setTab('trips');
  }
  function goToFlights() {
    setTab('flights');
  }
  function goToGuide() {
    setTab('guide');
  }

  function onDestinationChange(e) {
    const v = e.target.value;
    setForm((f) => ({ ...f, destination: v }));
  }
  function onDaysChange(e) {
    const v = Number(e.target.value);
    setForm((f) => ({ ...f, days: v }));
  }
  function onBudgetChange(e) {
    const v = Number(e.target.value);
    setForm((f) => ({ ...f, budget: v }));
  }
  function setStyle(name) {
    setForm((f) => ({ ...f, style: name }));
  }
  function toggleInterest(name) {
    setForm((f) => {
      const has = f.interests.includes(name);
      const interests = has ? f.interests.filter((i) => i !== name) : [...f.interests, name];
      return { ...f, interests };
    });
  }

  function startGenerate() {
    if (!form.destination.trim()) return;
    setTripScreen('generating');
    setGenStep(0);
    const advance = (step) => {
      setTimeout(() => {
        if (step > GEN_STEPS.length) {
          finishGenerate();
          return;
        }
        setGenStep(step);
        advance(step + 1);
      }, 650);
    };
    advance(1);
  }

  function finishGenerate() {
    const f = form;
    const id = 'trip-' + Date.now();
    const activities = pickItinerary(f.destination, f.days).map((a, i) => ({
      id: id + '-a' + i,
      day: a.day,
      time: a.time,
      name: a.name,
      category: a.category,
      cost: a.cost,
      addedBy: 'you',
      notes: '',
    }));
    const newTrip = {
      id,
      title: f.destination.split(',')[0] + ' Getaway',
      destination: f.destination,
      dateLabel: f.days + '-day trip',
      dayCount: f.days,
      budget: f.budget,
      generated: true,
      hotels: [],
      members: [{ id: 'you', name: 'You', initials: 'Y', color: '#E0663F', role: 'organizer', status: 'joined' }],
      activities,
    };
    setTrips((ts) => [newTrip, ...ts]);
    setTripScreen('itinerary');
    setCurrentTripId(id);
    setActiveDay(1);
    setMapFocusId(null);
    setTripSection('itinerary');
  }

  function selectDay(n) {
    setActiveDay(n);
    setMapFocusId(null);
  }
  function focusMapOn(id, e) {
    if (e && e.stopPropagation) e.stopPropagation();
    setMapFocusId(id);
  }

  function openActivity(tripId, activityId) {
    const trip = findTrip(tripId);
    const act = trip.activities.find((a) => a.id === activityId);
    setSheet('activity');
    setSelectedActivityId(activityId);
    setEditDraft({ time: act.time, cost: act.cost, notes: act.notes });
  }
  function closeSheet() {
    setSheet(null);
  }
  function stop(e) {
    if (e && e.stopPropagation) e.stopPropagation();
  }
  function onEditTimeChange(e) {
    const v = e.target.value;
    setEditDraft((d) => ({ ...d, time: v }));
  }
  function onEditCostChange(e) {
    const v = e.target.value;
    setEditDraft((d) => ({ ...d, cost: v }));
  }
  function onEditNotesChange(e) {
    const v = e.target.value;
    setEditDraft((d) => ({ ...d, notes: v }));
  }

  function saveActivityEdit() {
    setTrips((ts) =>
      ts.map((t) =>
        t.id !== currentTripId
          ? t
          : {
              ...t,
              activities: t.activities.map((a) =>
                a.id !== selectedActivityId ? a : { ...a, time: editDraft.time, cost: Number(editDraft.cost) || 0, notes: editDraft.notes }
              ),
            }
      )
    );
    setSheet(null);
  }
  function deleteActivity() {
    const trip = findTrip(currentTripId);
    const act = trip.activities.find((a) => a.id === selectedActivityId);
    if (act.addedBy !== 'you') return;
    setTrips((ts) => ts.map((t) => (t.id !== currentTripId ? t : { ...t, activities: t.activities.filter((a) => a.id !== selectedActivityId) })));
    setSheet(null);
  }

  function openMembers() {
    setSheet('members');
  }
  function onInviteEmailChange(e) {
    setInviteEmail(e.target.value);
  }
  function sendInvite() {
    const email = inviteEmail.trim();
    if (!email) return;
    const name = email.split('@')[0];
    const initials = name.slice(0, 2).toUpperCase();
    const color = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
    setTrips((ts) =>
      ts.map((t) =>
        t.id !== currentTripId ? t : { ...t, members: [...t.members, { id: 'inv-' + Date.now(), name, initials, color, role: 'collaborator', status: 'pending' }] }
      )
    );
    setInviteEmail('');
  }

  function openFlightImport() {
    setSheet('flightImport');
    setImportState('idle');
    setImportText('');
    setExtractedFlight(null);
  }
  function onImportTextChange(e) {
    setImportText(e.target.value);
  }
  function parseImport() {
    setImportState('parsing');
    setTimeout(() => {
      setImportState('done');
      setExtractedFlight({
        flightNumber: 'DL 47',
        airline: 'Delta',
        from: 'JFK',
        to: 'CDG',
        departDate: 'Apr 2',
        departTime: '7:45 PM',
        arriveDate: 'Apr 3',
        arriveTime: '9:10 AM',
        seat: '18C',
        confirmation: 'RX9K2L',
      });
    }, 1000);
  }
  function confirmImport() {
    setFlights((fs) => [...fs, { id: 'f-' + Date.now(), ...extractedFlight, alertsEnabled: true, alert: null }]);
    setSheet(null);
  }

  function toggleFlightAlerts(id) {
    setFlights((fs) => fs.map((f) => (f.id !== id ? f : { ...f, alertsEnabled: !f.alertsEnabled })));
  }
  function dismissAlert() {
    setFlights((fs) => fs.map((f) => (f.alert ? { ...f, alert: null } : f)));
  }
  function snoozeAlert() {
    dismissAlert();
  }

  function openHotelImport() {
    setSheet('hotelImport');
    setHotelImportState('idle');
    setHotelImportText('');
    setExtractedHotel(null);
  }
  function onHotelImportTextChange(e) {
    setHotelImportText(e.target.value);
  }
  function parseHotelImport() {
    setHotelImportState('parsing');
    setTimeout(() => {
      setHotelImportState('done');
      setExtractedHotel({
        name: 'Beachfront Villa Suites',
        area: 'Marina District',
        pricePerNight: 210,
        nights: 4,
        confirmation: 'BVS-7734X',
      });
    }, 1000);
  }
  function confirmHotelImport() {
    setTrips((ts) =>
      ts.map((t) => (t.id !== currentTripId ? t : { ...t, hotels: [...t.hotels, { id: 'h-' + Date.now(), ...extractedHotel, addedBy: 'you' }] }))
    );
    setSheet(null);
  }
  function addSuggestedHotel(suggestion) {
    setTrips((ts) =>
      ts.map((t) =>
        t.id !== currentTripId
          ? t
          : {
              ...t,
              hotels: [
                ...t.hotels,
                { id: 'h-' + Date.now(), name: suggestion.name, area: suggestion.area, pricePerNight: suggestion.pricePerNight, nights: t.dayCount, confirmation: null, addedBy: 'you' },
              ],
            }
      )
    );
  }

  const isHome = tab === 'trips' && tripScreen === 'home';
  const isForm = tab === 'trips' && tripScreen === 'form';
  const isGenerating = tab === 'trips' && tripScreen === 'generating';
  const isItinerary = tab === 'trips' && tripScreen === 'itinerary';
  const isFlightsTab = tab === 'flights';
  const isGuideTab = tab === 'guide';

  const activeAlert = FLIGHT_ALERT_DEMO
    ? (() => {
        const f = flights.find((fl) => fl.alert);
        return f ? { flightNumber: f.flightNumber, message: f.alert.message, time: f.alert.time } : null;
      })()
    : null;

  let selectedActivity = null;
  if (selectedActivityId && currentTrip) {
    const a = currentTrip.activities.find((x) => x.id === selectedActivityId);
    if (a) {
      const memberMap = {};
      currentTrip.members.forEach((m) => (memberMap[m.id] = m.name));
      selectedActivity = { ...a, addedByName: memberMap[a.addedBy] || 'You', showAddedBy: currentTrip.members.length > 1 };
    }
  }
  const deleteDisabled = !!(selectedActivity && selectedActivity.addedBy !== 'you');

  return (
    <div
      className="app-outer"
      style={{
        background: 'radial-gradient(ellipse at 30% 0%, #F5EDDC 0%, #EDE4D3 55%, #E6DBC5 100%)',
        fontFamily: "'Plus Jakarta Sans',sans-serif",
      }}
    >
      <div className="app-shell" style={{ background: '#FAF5EC' }}>
        <Sidebar tab={tab} goToTrips={goToTrips} goToFlights={goToFlights} goToGuide={goToGuide} openForm={openForm} />

        <div style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
          {isHome && <TripsHome trips={trips} openTrip={openTrip} showAddedByTags={SHOW_ADDED_BY_TAGS} />}

          {isForm && (
            <NewTripForm
              form={form}
              backFromForm={backFromForm}
              onDestinationChange={onDestinationChange}
              onDaysChange={onDaysChange}
              onBudgetChange={onBudgetChange}
              setStyle={setStyle}
              toggleInterest={toggleInterest}
              startGenerate={startGenerate}
            />
          )}

          {isGenerating && <GeneratingScreen destination={form.destination} genStep={genStep} />}

          {isItinerary && currentTrip && (
            <ItineraryScreen
              trip={currentTrip}
              activeDay={activeDay}
              selectDay={selectDay}
              goHome={goHome}
              openMembers={openMembers}
              openActivity={openActivity}
              focusMapOn={focusMapOn}
              mapFocusId={mapFocusId}
              showAddedByTags={SHOW_ADDED_BY_TAGS}
              tripSection={tripSection}
              setTripSection={setTripSection}
              openHotelImport={openHotelImport}
              addSuggestedHotel={addSuggestedHotel}
            />
          )}

          {isFlightsTab && (
            <FlightsScreen
              flights={flights}
              activeAlert={activeAlert}
              dismissAlert={dismissAlert}
              snoozeAlert={snoozeAlert}
              openFlightImport={openFlightImport}
              toggleFlightAlerts={toggleFlightAlerts}
            />
          )}

          {isGuideTab && <GuideScreen />}
        </div>

        {sheet && (
          <div
            onClick={closeSheet}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(20,25,30,0.4)',
              zIndex: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {sheet === 'members' && currentTrip && (
              <MembersSheet
                trip={currentTrip}
                inviteEmail={inviteEmail}
                onInviteEmailChange={onInviteEmailChange}
                sendInvite={sendInvite}
                stop={stop}
              />
            )}

            {sheet === 'activity' && selectedActivity && (
              <ActivitySheet
                activity={selectedActivity}
                editDraft={editDraft}
                onEditTimeChange={onEditTimeChange}
                onEditCostChange={onEditCostChange}
                onEditNotesChange={onEditNotesChange}
                saveActivityEdit={saveActivityEdit}
                deleteActivity={deleteActivity}
                deleteDisabled={deleteDisabled}
                stop={stop}
              />
            )}

            {sheet === 'flightImport' && (
              <FlightImportSheet
                importState={importState}
                importText={importText}
                onImportTextChange={onImportTextChange}
                parseImport={parseImport}
                extractedFlight={extractedFlight}
                confirmImport={confirmImport}
                stop={stop}
              />
            )}

            {sheet === 'hotelImport' && (
              <HotelImportSheet
                importState={hotelImportState}
                importText={hotelImportText}
                onImportTextChange={onHotelImportTextChange}
                parseImport={parseHotelImport}
                extractedHotel={extractedHotel}
                confirmImport={confirmHotelImport}
                stop={stop}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
