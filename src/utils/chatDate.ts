/**
 * Utility functions for date handling in Tanya Musyrif NahwuLab
 * Uses Asia/Jakarta (WIB) timezone for Indonesian calendar day boundaries
 */

export function getJakartaDateKey(dateInput?: Date | string | number): string {
  const d = dateInput ? new Date(dateInput) : new Date();
  if (isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

export function getJakartaDateLabel(dateKey: string): string {
  const todayKey = getJakartaDateKey();
  if (dateKey === todayKey) return 'Hari ini';

  try {
    const todayD = new Date(todayKey + 'T12:00:00+07:00');
    const targetD = new Date(dateKey + 'T12:00:00+07:00');
    const diffDays = Math.round((todayD.getTime() - targetD.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return 'Kemarin';

    return targetD.toLocaleDateString('id-ID', {
      timeZone: 'Asia/Jakarta',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateKey;
  }
}

export function formatJakartaTime(timestamp: string | number | Date): string {
  try {
    const d = new Date(timestamp);
    return (
      d.toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
      }) + ' WIB'
    );
  } catch {
    return '';
  }
}
