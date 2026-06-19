// Single source of truth for ICGK events.
// To add an event: append to ICGK_EVENTS below.
// To retire an event: nothing to do. Once it ends + 2 days,
//   it disappears from the home page and shows up on events-archive.html automatically.
//
// Date format: ISO local — "YYYY-MM-DDTHH:MM" (no timezone suffix).
// All times are interpreted in the visitor's local time.
window.ICGK_EVENTS = [
  {
    id: "fundraising-lunch-2026-07-03",
    title: "Fundraising Lunch",
    tagline: "Together we build. Together we grow.",
    blurb: "Support your masjid — every plate makes a difference in building our future together.",
    start: "2026-07-03T13:00",
    end:   "2026-07-03T14:30",
    location: "ICGK Masjid",
    address: "5600 TX-195, Killeen, TX 76542",
    price: "$10 per plate · larger donations welcomed",
    image: "img/7-3-2026-event.jpg",
    imageAlt: "ICGK Fundraising Lunch flyer — Friday, July 3, 2026, 1:00–2:30 PM, $10 per plate",
    cta: { label: "❤️ Donate", href: "https://app.autobooks.co/pay/icgk" }
  }
];

// ---- Helpers ----
// Event is considered "archived" 2 days (48h) after its end time.
window.ICGK_ARCHIVE_GRACE_MS = 2 * 24 * 60 * 60 * 1000;

window.ICGK_isArchived = function (ev, now) {
  now = now || new Date();
  var end = new Date(ev.end);
  return (now.getTime() - end.getTime()) > window.ICGK_ARCHIVE_GRACE_MS;
};

window.ICGK_getActiveEvents = function (now) {
  return window.ICGK_EVENTS
    .filter(function (e) { return !window.ICGK_isArchived(e, now); })
    .sort(function (a, b) { return new Date(a.start) - new Date(b.start); });
};

window.ICGK_getArchivedEvents = function (now) {
  return window.ICGK_EVENTS
    .filter(function (e) { return window.ICGK_isArchived(e, now); })
    .sort(function (a, b) { return new Date(b.start) - new Date(a.start); });
};

window.ICGK_formatEventDate = function (ev) {
  var s = new Date(ev.start);
  var e = new Date(ev.end);
  var dateStr = s.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  var timeStr = s.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) +
                " – " +
                e.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  return { date: dateStr, time: timeStr };
};
