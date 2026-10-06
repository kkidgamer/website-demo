const monthNumbers = {
  January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
  July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
}

function eventUtc(event, timeText) {
  const [, month, day, year] = event.date.match(/^(\w+)\s+(\d{1,2}),\s+(\d{4})$/) || []
  const [, hourText, minuteText, meridiem] = timeText.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i) || []
  let hour = Number(hourText) % 12
  if (meridiem?.toUpperCase() === 'PM') hour += 12
  // Event times are presented in East Africa Time (UTC+3).
  const utc = new Date(Date.UTC(Number(year), Number(monthNumbers[month]) - 1, Number(day), hour - 3, Number(minuteText)))
  return utc.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
}

export function eventDateParts(date) {
  const [, month, day] = date.match(/^(\w+)\s+(\d{1,2}),\s+(\d{4})$/) || []
  return { month: month.slice(0, 3).toUpperCase(), day: Number(day) }
}

export function buildCalendarHref(event) {
  const [startTime, endTime] = event.time.split(' - ')
  const start = eventUtc(event, startTime)
  const end = eventUtc(event, endTime)
  const escape = value => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SchoolWeb//Events//EN', 'BEGIN:VEVENT',
    `UID:${encodeURIComponent(event.title)}-${start}@schoolweb`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}`,
    `DTSTART:${start}`, `DTEND:${end}`, `SUMMARY:${escape(event.title)}`,
    `DESCRIPTION:${escape(event.desc)}`, `LOCATION:${escape(event.location)}`,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
}
