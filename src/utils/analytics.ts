export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

interface AnalyticsEvent {
  event_type: 'page_view' | 'cta_click' | 'form_submission';
  landing_slug: string;
  utm_params: UTMParams;
  timestamp: string;
}

const UTM_STORAGE_KEY = 'landing_utm_params';
const EVENTS_STORAGE_KEY = 'landing_events';

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function normalizeUTMParams(params: UTMParams): UTMParams {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => Boolean(value))
  ) as UTMParams;
}

export function getUTMParamsFromUrl(): UTMParams {
  if (!isBrowser()) return {};

  const params = new URLSearchParams(window.location.search);
  return normalizeUTMParams({
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined,
  });
}

export function getStoredUTMParams(): UTMParams {
  if (!isBrowser()) return {};

  try {
    return JSON.parse(localStorage.getItem(UTM_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function storeUTMParams(): UTMParams {
  if (!isBrowser()) return {};

  const current = getUTMParamsFromUrl();
  const stored = getStoredUTMParams();
  const merged = normalizeUTMParams({ ...stored, ...current });

  if (Object.keys(merged).length > 0) {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
  }

  return merged;
}

export function getUTMParams(): UTMParams {
  if (!isBrowser()) return {};

  const current = getUTMParamsFromUrl();
  if (Object.keys(current).length > 0) {
    return storeUTMParams();
  }

  return getStoredUTMParams();
}

export function populateUTMFields(form: HTMLFormElement): void {
  const utmParams = getUTMParams();
  Object.entries(utmParams).forEach(([key, value]) => {
    const field = form.querySelector<HTMLInputElement>(`input[name="${key}"]`);
    if (field && value) {
      field.value = value;
    }
  });
}

/**
 * Log an analytics event
 */
export function logAnalyticsEvent(event: AnalyticsEvent): void {
  if (!isBrowser()) return;

  console.log('Analytics Event:', event);

  const events = JSON.parse(localStorage.getItem(EVENTS_STORAGE_KEY) || '[]');
  events.push(event);
  localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
}

/**
 * Track page view
 */
export function trackPageView(landingSlug: string): void {
  const utmParams = storeUTMParams();
  logAnalyticsEvent({
    event_type: 'page_view',
    landing_slug: landingSlug,
    utm_params: utmParams,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(landingSlug: string): void {
  const utmParams = getUTMParams();
  logAnalyticsEvent({
    event_type: 'cta_click',
    landing_slug: landingSlug,
    utm_params: utmParams,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(landingSlug: string): void {
  const utmParams = getUTMParams();
  logAnalyticsEvent({
    event_type: 'form_submission',
    landing_slug: landingSlug,
    utm_params: utmParams,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Get all stored analytics events
 */
export function getStoredEvents(): AnalyticsEvent[] {
  if (!isBrowser()) return [];
  return JSON.parse(localStorage.getItem(EVENTS_STORAGE_KEY) || '[]');
}

/**
 * Clear stored analytics events
 */
export function clearStoredEvents(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(EVENTS_STORAGE_KEY);
}
