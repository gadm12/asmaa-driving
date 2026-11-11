// Keep contact links working even if analytics is slow or blocked.
const pendingEvents = [];

function sendEvent(event) {
  try {
    const tracker = window.goatcounter;
    if (typeof tracker?.count !== "function") return false;
    tracker.count(event);
    return true;
  } catch {
    // Analytics must never prevent a call or WhatsApp navigation.
    return true;
  }
}

function flushPendingEvents() {
  while (pendingEvents.length && sendEvent(pendingEvents[0])) {
    pendingEvents.shift();
  }
}

document.querySelector("script[data-goatcounter]")?.addEventListener(
  "load",
  flushPendingEvents,
  { once: true },
);

export function trackContactClick(event) {
  const link = event.currentTarget;
  const isPhone = link.protocol === "tel:";
  const isWhatsApp = link.protocol === "https:" && link.hostname === "wa.me";
  if (!isPhone && !isWhatsApp) return;

  flushPendingEvents();
  const data = {
    path: isPhone ? "call-click" : "whatsapp-click",
    title: isPhone ? "Call clicks" : "WhatsApp clicks",
    event: true,
    no_session: true,
  };
  if (!sendEvent(data) && pendingEvents.length < 50) pendingEvents.push(data);
}
