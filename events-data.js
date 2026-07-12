// Single source of truth for ICGK events.
// To add an event: append to ICGK_EVENTS below.
// To retire an event: nothing to do. Once it ends + 2 days,
//   it disappears from the home page and shows up on events-archive.html automatically.
//
// Date format: ISO local — "YYYY-MM-DDTHH:MM" (no timezone suffix).
// All times are interpreted in the visitor's local time.
window.ICGK_EVENTS = [];

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
